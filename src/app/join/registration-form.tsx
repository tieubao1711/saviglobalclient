"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit2, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { api } from "@/lib/axios";
import { toast } from "react-toastify";

export function RegistrationForm() {
  const t = useTranslations();
  const [quantity, setQuantity] = useState(0);
  const unitPrice = 550.0;
  const unitPV = 500.0;

  const [idNumber, setIDNumber] = useState("");
  const [memberId, setMemberId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [refcode, setRefCode] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here

    try {
      const resp = await api.post("/api/auth/register", {
        username: companyName,
        password: password,
        idCard: idNumber,
        phoneNumber: phoneNumber,
        referralCode: refcode,
      });

      // dki thanh cong
      if (resp.status === 201) {
        toast(resp.data.message);
      } else {
        toast(resp.data.error);
      }
    } catch (ex) {
      console.error(ex);
      toast((ex as Error)?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <Card>
          <CardHeader className="bg-emerald-400">
            <CardTitle className="text-white">
              {t("application-information")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="idNumber" className="text-sm">
                  {t("id-card")} / {t("unified-number")}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="idNumber"
                  value={idNumber}
                  onChange={(e) => setIDNumber(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-sm">
                  {t("application-name")} / {t("company-name")}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dob" className="text-sm">
                  {t("date-of-birth")}
                  <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input id="dob" type="date" />
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality" className="text-sm">
                  {t("identity")}
                  <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="vietnam">
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn quốc tịch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vietnam">Vietnam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-sm">
                  {t("gender")}
                  <span className="text-red-500">*</span>
                </Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Xin vui lòng chọn" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Nam</SelectItem>
                    <SelectItem value="female">Nữ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="region" className="text-sm">
                  {t("region")}
                  <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="vietnam" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn khu vực" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vietnam">Việt Nam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="tel" className="text-sm">
                  {t("telephone")}
                </Label>
                <Input id="tel" placeholder={t("company")} />
                <Input id="homePhone" placeholder={t("home-phone-number")} />
                <Input
                  id="mobile"
                  placeholder={t("mobile-phone-number")}
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Label htmlFor="password" className="text-sm">
                  {t("password")}
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder={t("password")}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input id="email" type="email" />
                <Label htmlFor="address" className="text-sm">
                  {t("address")}
                </Label>
                <Input id="address" placeholder="mã bưu điện" />
                <Label htmlFor="refcode" className="text-sm">
                  {t("refcode")}
                </Label>
                <Input
                  id="refcode"
                  placeholder="mã giới thiệu"
                  value={refcode}
                  onChange={(e) => setRefCode(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-emerald-400">
            <CardTitle className="text-white">
              {t("operational-relationship")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex gap-4 items-end">
              <div className="flex-1 space-y-2">
                <Label htmlFor="memberId" className="text-sm">
                  {t("member-number")}/{t("id-card")}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="memberId"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                  required
                />
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Edit2 className="h-4 w-4 mr-2" />
                {t("revise")}
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm">
                {t("full-name")}
              </Label>
              <Input
                id="name"
                disabled
                className="bg-gray-100"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">
                {t("organization-chart-location")}
                <span className="text-red-500">*</span>
              </Label>
              <RadioGroup defaultValue="existing">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="existing" id="existing" />
                  <Label htmlFor="existing">{t("left")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="new" id="new" />
                  <Label htmlFor="new">{t("right")}</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-emerald-400">
            <CardTitle className="text-white">
              {t("eligibility-application")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <RadioGroup defaultValue="existing">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="existing" id="existing" />
                  <Label htmlFor="existing">500PV</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-emerald-400">
            <CardTitle className="text-white">
              {t("account-information")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm">
                {t("bank-name")}
              </Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm">
                {t("account-name")}
              </Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm">
                {t("account-number")}
              </Label>
              <Input />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-emerald-400">
            <CardTitle className="text-white">{t("account-number")}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-yellow-400">
                  <tr>
                    <th className="p-2 text-left">ID</th>
                    <th className="p-2 text-left">{t("name")}</th>
                    <th className="p-2 text-right">{t("unit-price")}</th>
                    <th className="p-2 text-right">PV</th>
                    <th className="p-2 text-right">{t("amount")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">002</td>
                    <td className="p-2">Ngưu Chương Chỉ (2 hộp)</td>
                    <td className="p-2 text-right">{unitPrice.toFixed(2)}</td>
                    <td className="p-2 text-right">{unitPV.toFixed(2)}</td>
                    <td className="p-2 text-right">
                      <Select
                        value={quantity.toString()}
                        onValueChange={(value) => setQuantity(Number(value))}
                      >
                        <SelectTrigger className="w-20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[0, 1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-end gap-8 mt-4">
              <div className="text-right">
                <div>{t("total-amount")}</div>
                <div className="bg-gray-100 px-4 py-2 rounded">
                  {(quantity * unitPrice).toFixed(2)}
                </div>
              </div>
              <div className="text-right">
                <div>{t("total")} PV</div>
                <div className="bg-gray-100 px-4 py-2 rounded">
                  {(quantity * unitPV).toFixed(2)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-emerald-400">
            <CardTitle className="text-white">{t("payment-type")}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="payment" />
                <Label htmlFor="payment">{t("trigger-points")}</Label>
              </div>
              <div className="flex justify-end gap-4">
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                  {t("confirm")}
                </Button>
                <Button variant="outline">{t("refill")}</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
