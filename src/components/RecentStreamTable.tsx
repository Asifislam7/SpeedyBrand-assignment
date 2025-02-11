"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Input } from "./ui/input"

const initialData = [
  { id: 1, songName: "Song A", artist: "Artist X", dateStreamed: "2023-05-01", streamCount: 1500, userId: "user123" },
  { id: 2, songName: "Song B", artist: "Artist Y", dateStreamed: "2023-05-02", streamCount: 1200, userId: "user456" },
  { id: 3, songName: "Song C", artist: "Artist Z", dateStreamed: "2023-05-03", streamCount: 1000, userId: "user789" },
  { id: 4, songName: "Song D", artist: "Artist X", dateStreamed: "2023-05-04", streamCount: 900, userId: "user234" },
  { id: 5, songName: "Song E", artist: "Artist Y", dateStreamed: "2023-05-05", streamCount: 800, userId: "user567" },
]

export function RecentStreamsTable() {
  const [data, setData] = useState(initialData)
  const [sortColumn, setSortColumn] = useState("")
  const [sortDirection, setSortDirection] = useState("asc")
  const [filter, setFilter] = useState("")
  const [selectedSort, setSelectedSort] = useState("")

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[column as keyof typeof a] < b[column as keyof typeof b]) return sortDirection === "asc" ? -1 : 1
      if (a[column as keyof typeof a] > b[column as keyof typeof b]) return sortDirection === "asc" ? 1 : -1
      return 0
    })

    setData(sortedData)
  }

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value.toLowerCase()
    setFilter(filterValue)

    const filteredData = initialData.filter(
      (item) => item.songName.toLowerCase().includes(filterValue) || item.artist.toLowerCase().includes(filterValue),
    )

    setData(filteredData)
  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(event.target.value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Filter by song or artist" value={filter} onChange={handleFilter} className="mb-4" />
        <div className="mb-4">
          <select className="p-2 border rounded mr-5" onChange={handleSelectChange}>
            <option value="">Sort by</option>
            <option value="dateStreamed">Date Streamed</option>
            <option value="streamCount">Stream Count</option>
          </select>
          <button onClick={() => handleSort(selectedSort)}>Sort the Table</button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Song Name</TableHead>
              <TableHead>Artist</TableHead>
              <TableHead>Date Streamed</TableHead>
              <TableHead>Stream Count</TableHead>
              <TableHead>User ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.songName}</TableCell>
                <TableCell>{item.artist}</TableCell>
                <TableCell>{item.dateStreamed}</TableCell>
                <TableCell>{item.streamCount}</TableCell>
                <TableCell>{item.userId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

