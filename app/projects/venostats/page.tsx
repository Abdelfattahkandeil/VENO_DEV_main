"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, BarChart3, LineChart, PieChart, Settings, Users, TrendingUp } from "lucide-react"

export default function VenoStatsPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Last 7 Days
            </Button>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <h3 className="text-2xl font-bold mt-1">12,548</h3>
                  <p className="text-xs text-green-500 mt-1">+16% from last month</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                  <h3 className="text-2xl font-bold mt-1">$45,678</h3>
                  <p className="text-xs text-green-500 mt-1">+8% from last month</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <LineChart className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                  <h3 className="text-2xl font-bold mt-1">3.2%</h3>
                  <p className="text-xs text-red-500 mt-1">-0.4% from last month</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <PieChart className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Sessions</p>
                  <h3 className="text-2xl font-bold mt-1">1,429</h3>
                  <p className="text-xs text-green-500 mt-1">+12% from last month</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Monthly performance metrics for your application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gray-100 rounded flex items-center justify-center">[Line Chart Placeholder]</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gray-100 rounded flex items-center justify-center">[Pie Chart Placeholder]</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            className="hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => router.push("/projects/venostats/analytics")}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <LineChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">View Analytics</h3>
                    <p className="text-sm text-muted-foreground">Detailed metrics and insights</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => router.push("/projects/venostats/performance")}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Performance Overview</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive performance metrics</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => router.push("/projects/venostats/settings")}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Settings</h3>
                    <p className="text-sm text-muted-foreground">Configure your dashboard</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
