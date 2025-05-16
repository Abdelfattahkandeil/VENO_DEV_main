"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Download, LineChart, BarChart3, PieChart, Share2 } from "lucide-react"
import Link from "next/link"
import PerformanceFlowchart from "../components/performance-flowchart"

export default function PerformancePage() {
  const [timeframe, setTimeframe] = useState("monthly")

  return (
    <div className="container mx-auto">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link href="/projects/venostats">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Performance Overview</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-lg font-medium">Monthly Performance Metrics</h2>
          <p className="text-muted-foreground">Comprehensive analysis of key performance indicators</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">User Engagement</p>
                <h3 className="text-2xl font-bold mt-1">78.3%</h3>
                <p className="text-xs text-green-500 mt-1">+12.4% from last month</p>
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
                <p className="text-sm font-medium text-muted-foreground">Traffic Growth</p>
                <h3 className="text-2xl font-bold mt-1">24.8%</h3>
                <p className="text-xs text-green-500 mt-1">+5.2% from last month</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                <h3 className="text-2xl font-bold mt-1">3.7%</h3>
                <p className="text-xs text-green-500 mt-1">+0.5% from last month</p>
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
                <p className="text-sm font-medium text-muted-foreground">Avg. Session Duration</p>
                <h3 className="text-2xl font-bold mt-1">4:32</h3>
                <p className="text-xs text-red-500 mt-1">-0:18 from last month</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <LineChart className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="overview" className="mb-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
          <TabsTrigger value="engagement">User Engagement</TabsTrigger>
          <TabsTrigger value="conversion">Conversion Funnel</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics Flow</CardTitle>
              <CardDescription>Visual representation of how different metrics influence each other</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded-md">
                <PerformanceFlowchart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources Analysis</CardTitle>
              <CardDescription>Breakdown of traffic by source and medium</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gray-100 rounded flex items-center justify-center">
                [Traffic Sources Chart Placeholder]
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>User Engagement Metrics</CardTitle>
              <CardDescription>Detailed analysis of how users interact with your application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gray-100 rounded flex items-center justify-center">
                [User Engagement Chart Placeholder]
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversion" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>Step-by-step analysis of user conversion journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gray-100 rounded flex items-center justify-center">
                [Conversion Funnel Chart Placeholder]
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Detailed Metrics Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Performance Metrics</CardTitle>
          <CardDescription>Comprehensive breakdown of all performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Metric</th>
                  <th className="text-left py-3 px-4">Current</th>
                  <th className="text-left py-3 px-4">Previous</th>
                  <th className="text-left py-3 px-4">Change</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Page Views</td>
                  <td className="py-3 px-4">245,678</td>
                  <td className="py-3 px-4">198,342</td>
                  <td className="py-3 px-4 text-green-500">+23.9%</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Improved</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Unique Visitors</td>
                  <td className="py-3 px-4">87,432</td>
                  <td className="py-3 px-4">76,129</td>
                  <td className="py-3 px-4 text-green-500">+14.8%</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Improved</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Bounce Rate</td>
                  <td className="py-3 px-4">32.4%</td>
                  <td className="py-3 px-4">35.7%</td>
                  <td className="py-3 px-4 text-green-500">-3.3%</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Improved</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Avg. Session Duration</td>
                  <td className="py-3 px-4">4:32</td>
                  <td className="py-3 px-4">4:50</td>
                  <td className="py-3 px-4 text-red-500">-6.2%</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Declined</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Conversion Rate</td>
                  <td className="py-3 px-4">3.7%</td>
                  <td className="py-3 px-4">3.2%</td>
                  <td className="py-3 px-4 text-green-500">+0.5%</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Improved</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
