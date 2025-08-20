import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings, Youtube, User } from "lucide-react";

export const SettingsTab = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account and application preferences
        </p>
      </div>

      <div className="grid gap-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </CardTitle>
            <CardDescription>
              Update your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <Button>Update Profile</Button>
          </CardContent>
        </Card>

        {/* YouTube Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Youtube className="h-5 w-5" />
              <span>YouTube Integration</span>
            </CardTitle>
            <CardDescription>
              Connect your YouTube channel for seamless uploading
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">YouTube Channel</p>
                <p className="text-sm text-muted-foreground">
                  Not connected
                </p>
              </div>
              <Button variant="outline">Connect YouTube</Button>
            </div>
            <Separator />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="autoUpload">Auto-upload shorts</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically upload generated shorts to your channel
                  </p>
                </div>
                <Switch id="autoUpload" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Processing Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Processing Preferences</span>
            </CardTitle>
            <CardDescription>
              Configure how your videos are processed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sliceLength">Default Slice Length (seconds)</Label>
                <Input id="sliceLength" type="number" defaultValue="60" min="15" max="180" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sliceCount">Number of Slices</Label>
                <Input id="sliceCount" type="number" defaultValue="3" min="1" max="10" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="autoSlice">Auto-slice new uploads</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically start processing when a video is uploaded
                </p>
              </div>
              <Switch id="autoSlice" defaultChecked />
            </div>
            <Button>Save Preferences</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};