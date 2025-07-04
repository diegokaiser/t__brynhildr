'use client';

import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { withAuth } from '@/hocs/withAuth';
import apis from '@/apis';
import { LoadingScreen } from '@/components/atoms';

type WeightGroup = {
  mm: string;
  records: {
    id: string;
    unit: number;
    value: number;
    createdAt: any;
  }[];
};

const Weight = () => {
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<WeightGroup[]>([]);
  const [lastData, setLastData] = useState([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await apis.weights.GetWeightsGroupedByMonth();
        setGroups(data as WeightGroup[]);

        // armar data para cada grupo
        const transformed = (data as WeightGroup[]).map((group) => {
          const labels = group.records.map((record) =>
            record.createdAt.toDate().getDate().toString()
          );
          const values = group.records.map((record) => record.value);

          return {
            labels,
            datasets: [
              {
                label: 'Peso',
                data: values,
                fill: false,
                borderColor: 'rgba(70, 128, 255, 0.9)',
                tension: 0.3,
              },
            ],
          };
        });

        setChartData(transformed);
        setChartOptions({
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
            legend: {
              display: false,
            },
          },
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    const fetchLastData = async () => {
      try {
        setLoading(true);
        const data = await apis.weights.GetLastWeights();
        setLastData(data as []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    fetchLastData();
  }, []);

  const monthNames: Record<string, string> = {
    '01': 'Enero',
    '02': 'Febrero',
    '03': 'Marzo',
    '04': 'Abril',
    '05': 'Mayo',
    '06': 'Junio',
    '07': 'Julio',
    '08': 'Agosto',
    '09': 'Septiembre',
    '10': 'Octubre',
    '11': 'Noviembre',
    '12': 'Diciembre',
  };
  console.log(lastData);

  return (
    <>
      {loading && <LoadingScreen />}
      <div
        className="box-border flex flex-wrap justify-center"
        style={{ width: 'calc(100% + 28px)' }}
      >
        {groups.map((group, groupIndex) => (
          <div
            className="box-border flex flex-wrap justify-center -ml-[20px] text-[#1d2630]"
            style={{ width: 'calc(100% + 28px)' }}
          >
            <div className="box-border m-0 pl-5 pt-5 basis-[100%] grow-0 max-w-[100%] lg:basis-[75%] lg:max-w-[75%]">
              <div className="bg-white shadow-none overflow-hidden relative border border-solid border-[#dbe0e5a6] rounded-[8px]">
                <div className="p-6">
                  <div className="flex items-center justify-start mb-3">
                    <h5 className="font-semibold text-sm" style={{ lineHeight: '1,5' }}>
                      {monthNames[group.mm] ?? group.mm}
                    </h5>
                  </div>
                  <div className="flex items-center justify-end"></div>
                  <div>
                    {chartData && (
                      <Chart
                        type="line"
                        data={chartData[groupIndex]}
                        options={chartOptions}
                        height="280px"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border m-0 pl-5 pt-5 basis-[100%] grow-0 max-w-[100%] lg:basis-[25%] lg:max-w-[25%]">
              <div className="bg-white shadow-none overflow-hidden relative border border-solid border-[#dbe0e5a6] rounded-[8px]">
                <div className="p-5">
                  <h5 className="font-semibold text-sm" style={{ lineHeight: '1,5' }}>
                    Últimas entradas en {monthNames[group.mm] ?? group.mm}
                  </h5>
                </div>
                <hr className="border-[#dbe0e5a6]" />
                <div className="w-full overflow-x-auto block">
                  <table className="table w-full border-collapse border-spacing-0">
                    <thead className="table-header-group bg-[#f8f9fa] border-t border-b border-solid border-[#dbe0e5a6]">
                      <tr className="table-row align-middle outline-0">
                        <th className="table-cell text-left p-3 font-semibold capitalize text-xs pl-6">
                          Fecha
                        </th>
                        <th className="table-cell text-left p-3 font-semibold capitalize text-xs pr-6">
                          Peso
                        </th>
                      </tr>
                    </thead>
                    <tbody className="table-row-group">
                      {chartData[groupIndex] &&
                        chartData[groupIndex].labels
                          .slice(-5)
                          .reverse()
                          .map((label: string, i: number) => (
                            <tr key={i} className="table-row align-middle outline-0">
                              <td className="table-cell text-left p-3 font-normal pl-6 border-t border-solid border-[#dbe0e5a6]">
                                <p className="font-light text-xs">Día {label}</p>
                              </td>
                              <td className="table-cell text-left p-3 font-normal pr-6 border-t border-solid border-[#dbe0e5a6]">
                                <h6 className="font-semibold text-xs">
                                  {
                                    chartData[groupIndex].datasets[0].data[
                                      chartData[groupIndex].labels.length - 1 - i
                                    ]
                                  }
                                </h6>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default withAuth(Weight);
