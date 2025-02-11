"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", totalUsers: 1000000, activeUsers: 800000 },
  { month: "Feb", totalUsers: 1100000, activeUsers: 900000 },
  { month: "Mar", totalUsers: 1200000, activeUsers: 1000000 },
  { month: "Apr", totalUsers: 1300000, activeUsers: 1100000 },
  { month: "May", totalUsers: 1400000, activeUsers: 1200000 },
  { month: "Jun", totalUsers: 1500000, activeUsers: 1300000 },
  { month: "Jul", totalUsers: 1600000, activeUsers: 1400000 },
  { month: "Aug", totalUsers: 1700000, activeUsers: 1500000 },
  { month: "Sep", totalUsers: 1800000, activeUsers: 1600000 },
  { month: "Oct", totalUsers: 1900000, activeUsers: 1700000 },
  { month: "Nov", totalUsers: 2000000, activeUsers: 1800000 },
  { month: "Dec", totalUsers: 2100000, activeUsers: 1900000 },
]

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" name="Total Users" />
            <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" name="Active Users" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

