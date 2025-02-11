"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Song A", streams: 1200000 },
  { name: "Song B", streams: 980000 },
  { name: "Song C", streams: 850000 },
  { name: "Song D", streams: 780000 },
  { name: "Song E", streams: 720000 },
]

export function TopStreamedSongs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 5 Streamed Songs</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="streams" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

