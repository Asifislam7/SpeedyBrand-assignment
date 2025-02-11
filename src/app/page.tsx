import Dashboard from "@/components/Dashboard"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased"   style={{
      background: "linear-gradient(to right, ivory, lightblue)",
      color:"black",
      fontWeight:"bold"
    }}>
      <Dashboard />
      <footer className="mt-8 p-4 bg-gray-200 text-center" style={{ background: "lightgray", color: "black" }}>
        <p>This dashboard provides insights into recent streams, including song names, artists, dates streamed, stream counts, and user IDs.</p>
        <p>Created by Asif Islam</p>
        <p>&copy; {new Date().getFullYear()} Asif Islam. All rights reserved.</p>
      </footer>
    </main>
  )
}

