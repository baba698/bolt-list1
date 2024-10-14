import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We are dedicated to providing up-to-date news from various reputable sources around the world. Our RSS news aggregator brings you the latest stories from BBC, CNA, DW, Kyodo News, RFA, and WSJ, all in one place.</p>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Our Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>BBC (British Broadcasting Corporation)</li>
            <li>CNA (Channel News Asia)</li>
            <li>DW (Deutsche Welle)</li>
            <li>Kyodo News</li>
            <li>RFA (Radio Free Asia)</li>
            <li>WSJ (Wall Street Journal)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}