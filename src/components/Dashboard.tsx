import { KeyMetrics } from "./KeyMetrics"
import { UserGrowthChart } from "./UserGrowthChart"
import { RevenueDistribution } from "./RevenueDistribution"
import { TopStreamedSongs } from "./TopStreamedSongs"
import { RecentStreamsTable } from "./RecentStreamTable"
import { GeoDistribution } from "./GeoDistribution"
import { PlaylistAnalysis } from "./PlaylistAnalysis"
import { UserRetentionGraph } from "./UserRetentionChart"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center">Streamify Dashboard</h1>
      <KeyMetrics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UserGrowthChart />
        <RevenueDistribution />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PlaylistAnalysis />
        <UserRetentionGraph />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TopStreamedSongs />
        <GeoDistribution />
      </div>
      </div>
      <RecentStreamsTable />
    </div>
  )
}

