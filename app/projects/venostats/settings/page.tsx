"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Configure your VenoStats dashboard preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Account Settings</h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Dashboard Preferences</h3>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <Switch id="dark-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Email Notifications</Label>
                  <Switch id="notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-refresh">Auto-refresh Dashboard</Label>
                  <Switch id="auto-refresh" defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Data Preferences</h3>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="data-sharing">Data Sharing</Label>
                  <Switch id="data-sharing" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="analytics">Usage Analytics</Label>
                  <Switch id="analytics" defaultChecked />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button onClick={() => router.push("/projects/venostats")} variant="outline" className="mr-2">
                Cancel
              </Button>
              <Button>Save Changes</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
