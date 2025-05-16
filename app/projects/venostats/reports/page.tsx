"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReportsPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
          <CardDescription>Generate and view detailed reports of your data.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <p>This is the reports page of VenoStats. Here you can generate and download various reports.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Monthly Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Comprehensive report of monthly performance metrics and KPIs.
                  </p>
                  <Button>Generate Report</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">User Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Detailed analysis of user engagement and activity patterns.
                  </p>
                  <Button>Generate Report</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Revenue Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Financial report with revenue breakdowns and projections.
                  </p>
                  <Button>Generate Report</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Custom Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Create a custom report with your selected metrics and dimensions.
                  </p>
                  <Button>Create Custom Report</Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end mt-4">
              <Button onClick={() => router.push("/projects/venostats")} variant="outline" className="mr-2">
                Back to Dashboard
              </Button>
              <Button onClick={() => router.push("/projects/venostats/analytics")}>View Analytics</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
