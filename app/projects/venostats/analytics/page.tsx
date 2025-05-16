"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalyticsPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>View detailed analytics and insights for your data.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <p>This is the analytics page of VenoStats. Here you can view detailed metrics and insights.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">User Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
                    [Line Chart Placeholder]
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Traffic Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
                    [Pie Chart Placeholder]
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
                    [Bar Chart Placeholder]
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end mt-4">
              <Button onClick={() => router.push("/projects/venostats")} variant="outline" className="mr-2">
                Back to Dashboard
              </Button>
              <Button onClick={() => router.push("/projects/venostats/reports")}>View Reports</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
