import { Calendar, Search, ArrowDown, RotateCcw, ArrowRight, FileText, Pencil, Trash2, Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AirExportForm() {
  return (
    <div className="bg-white p-4 min-h-screen">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold text-[#1a4b81]">Job (MAWB) Air Export</div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="bg-[#4477bb] hover:bg-[#3366aa] text-white">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-[#4477bb] hover:bg-[#3366aa] text-white">
            <ArrowDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-[#4477bb] hover:bg-[#3366aa] text-white">
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-[#4477bb] hover:bg-[#3366aa] text-white">
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-[#4477bb] hover:bg-[#3366aa] text-white">
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-[#4477bb] hover:bg-[#3366aa] text-white">
            <Pencil className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-[#4477bb] hover:bg-[#3366aa] text-white">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-[#4477bb] hover:bg-[#3366aa] text-white">
            <Check className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-[#4477bb] hover:bg-[#3366aa] text-white">
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Form */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Branch</label>
              <Select defaultValue="khi">
                <SelectTrigger>
                  <SelectValue placeholder="Select branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="khi">KHI</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Job No.</label>
              <div className="flex gap-2">
                <Input defaultValue="2625" className="w-20" />
                <Input defaultValue="34" className="w-16" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Job Type</label>
              <Select defaultValue="freight">
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="freight">Freight</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Job Date</label>
              <div className="relative">
                <Input type="date" defaultValue="2025-02-18" />
                <Calendar className="absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Party Section */}
          <div className="border rounded-md p-4">
            <h3 className="text-sm font-semibold mb-4 bg-[#1a4b81] text-white p-2">PARTY</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Party Code</label>
                <Input defaultValue="10601035 - MASUM LOGISTICS" />
              </div>
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input defaultValue="MASUM LOGISTICS" />
              </div>
              <div>
                <label className="text-sm font-medium">Address</label>
                <Input defaultValue="KARACHI PAKISTAN" />
              </div>
            </div>
          </div>

          {/* Consignee Section */}
          <div className="border rounded-md p-4">
            <h3 className="text-sm font-semibold mb-4 bg-[#1a4b81] text-white p-2">CONSIGNEE</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input defaultValue="DIRECT FREIGHT" />
              </div>
              <div>
                <label className="text-sm font-medium">Address</label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  defaultValue="BLDG 28 PRINCE SHAKER BIN ZEID STREET
SWEILANI P.O.BOX 961140
AMMAN - JORDAN"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="border rounded-md p-4">
            <h3 className="text-sm font-semibold mb-4 bg-[#1a4b81] text-white p-2">HANDLING INFORMATION</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Currency</label>
                  <Select defaultValue="pkr">
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pkr">PKR - PAK CURRENCY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Ex. Rate</label>
                  <Input defaultValue="1.000000" />
                </div>
              </div>

              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">RCP</th>
                    <th className="p-2 text-left">Pcs</th>
                    <th className="p-2 text-left">Gross Wt.</th>
                    <th className="p-2 text-left">Rate PKR</th>
                    <th className="p-2 text-left">Total PKR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">NEW</td>
                    <td className="p-2">207</td>
                    <td className="p-2">5,555.00</td>
                    <td className="p-2">488.6168</td>
                    <td className="p-2">2,714,266.32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Said to Contain Section */}
          <div className="border rounded-md p-4">
            <h3 className="text-sm font-semibold mb-4 bg-[#1a4b81] text-white p-2">SAID TO CONTAIN</h3>
            <Input defaultValue="READY MADE GARMENTS" />
          </div>
        </div>
      </div>
    </div>
  )
}

