"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const playlistData = [
  { name: "Pop", count: 450 },
  { name: "Rock", count: 300 },
  { name: "Hip Hop", count: 280 },
  { name: "Electronic", count: 200 },
  { name: "Classical", count: 150 },
  { name: "Jazz", count: 100 },
  { name: "Country", count: 80 },
]

export function PlaylistAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Playlist Genre Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={playlistData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

