import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Music, IndianRupee, Award } from "lucide-react"

const metrics = [
  { title: "Total Users", value: "1,234,567", icon: Users },
  { title: "Active Users ", value: "987,654", icon: UserCheck },
  { title: "Total Streams", value: "10,987,654", icon: Music },
  { title: "Revenue", value: "5,678,901", icon: IndianRupee  },
  { title: "Top Artist", value: "Shreya Ghoshal", icon: Award },
]

export function KeyMetrics() { 
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

