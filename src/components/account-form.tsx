"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home } from "lucide-react";

export function AccountForm() {
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-md mx-auto p-6 mb-[500px]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="account">Vui lòng nhập tài khoản của bạn</Label>
          <Input
            id="account"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Vui lòng nhập Email đã đặt bạn đầu</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Button
            type="button"
            variant="outline"
            className="bg-blue-400 hover:bg-blue-500 text-white border-none min-w-[120px]"
            onClick={() => (window.location.href = "/")}
          >
            <Home className="w-4 h-4 mr-2" />
            Trang đầu
          </Button>

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white min-w-[120px]"
          >
            Xác nhận
          </Button>
        </div>
      </form>
    </div>
  );
}
