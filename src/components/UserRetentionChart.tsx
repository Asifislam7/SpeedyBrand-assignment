"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const retentionData = [
  { month: "Jan", retention: 95 },
  { month: "Feb", retention: 93 },
  { month: "Mar", retention: 92 },
  { month: "Apr", retention: 94 },
  { month: "May", retention: 95 },
  { month: "Jun", retention: 97 },
  { month: "Jul", retention: 96 },
  { month: "Aug", retention: 98 },
  { month: "Sep", retention: 97 },
  { month: "Oct", retention: 98 },
  { month: "Nov", retention: 99 },
  { month: "Dec", retention: 99 },
]

export function UserRetentionGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Retention</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={retentionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="retention" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

