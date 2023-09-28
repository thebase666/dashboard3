"use client";

import React from "react";
import { redirect } from "next/navigation";
import {
  Card,
  BarChart,
  Subtitle,
  AreaChart,
  DonutChart,
  LineChart,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";
// @ts-ignore
import { StatusOnlineIcon } from "@heroicons/react/outline";
import Userinfo from "@/components/Userinfo";

type Props = {
  params: {
    id: string;
  };
};

type scoreData = {
  type: string;
  score: number;
};

// 这个不是传参 是拿访问的url中的动态参数 然后把参数id给到组件 跟组件传参接参形式不一样

async function ClassPage({ params: { id } }: Props) {
  console.log("id", id);

  if (!id) {
    redirect("/");
  }

  // fetch API...
  const response = await fetch(`http://localhost:8080/api/v1/grade/${id}`, {
    method: "GET",
  });

  const apiData = await response.json();
  console.log("scores", apiData.scores);

  const dataFormatter = (number: number) => {
    return Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <>
      <div className='flex flex-col min-h-screen overflow-y-scroll '>
        <Userinfo />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2  space-y-3 '>
          <Card className=' mt-3 '>
            <Title>Scores</Title>
            <DonutChart
              className=''
              data={apiData.scores}
              index='type'
              category='score'
              valueFormatter={dataFormatter}
              colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
          </Card>

          <Card className='bg-blue-100 '>
            <Title>Scores</Title>
            <BarChart
              className=''
              data={apiData.scores}
              index='type'
              categories={["score"]}
              colors={["blue"]}
              valueFormatter={dataFormatter}
              yAxisWidth={24}
            />
          </Card>

          <Card className='bg-blue-100 '>
            <Title>Scores</Title>
            <AreaChart
              className=''
              data={apiData.scores}
              index='type'
              categories={["score"]}
              colors={["indigo", "cyan"]}
              valueFormatter={dataFormatter}
            />
          </Card>
        </div>

        <div className='p-2 space-y-3 '>
          <Card>
            <Title>Score</Title>
            <Table className='mt-5'>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Score</TableHeaderCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {apiData.scores.map((item: scoreData) => (
                  <TableRow key={item.type}>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>
                      <Text>{item.score}</Text>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ClassPage;
