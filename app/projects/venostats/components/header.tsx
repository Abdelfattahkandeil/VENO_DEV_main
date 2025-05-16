"use client"
import { useRouter } from "next/navigation"
import { Button } from "@mui/material"
import Link from "next/link"

const Header = () => {
  const router = useRouter()

  return (
    <header
      style={{
        backgroundColor: "#f0f0f0",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Link
          href="/projects/venostats"
          style={{ textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "1.2em" }}
        >
          VenoStats
        </Link>
      </div>
      <nav>
        <Button onClick={() => router.push("/projects/venostats")} style={{ marginRight: "8px" }}>
          Dashboard
        </Button>
        <Button onClick={() => router.push("/projects/venostats/analytics")} style={{ marginRight: "8px" }}>
          Analytics
        </Button>
        <Button onClick={() => router.push("/projects/venostats/reports")} style={{ marginRight: "8px" }}>
          Reports
        </Button>
        <Button onClick={() => router.push("/projects/venostats/settings")}>Settings</Button>
      </nav>
    </header>
  )
}

export default Header
