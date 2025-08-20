import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video, Download, Edit, Trash2 } from "lucide-react";

export const VideosTab = () => {
  // TODO: Replace with real data from Supabase
  const mockVideos = [
    {
      id: "1",
      title: "How to Build React Apps",
      status: "completed",
      slices: 3,
      createdAt: "2024-01-15",
      thumbnailUrl: "/placeholder.svg"
    },
    {
      id: "2", 
      title: "JavaScript Tips and Tricks",
      status: "processing",
      slices: 0,
      createdAt: "2024-01-14",
      thumbnailUrl: "/placeholder.svg"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default">Completed</Badge>;
      case "processing":
        return <Badge variant="secondary">Processing</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  if (mockVideos.length === 0) {
    return (
      <div className="text-center py-12">
        <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">No videos yet</h3>
        <p className="text-muted-foreground mb-4">
          Upload your first YouTube video to get started with creating shorts
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">My Videos</h2>
        <p className="text-muted-foreground">
          Manage your uploaded videos and generated shorts
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockVideos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <Video className="h-8 w-8 text-muted-foreground" />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base line-clamp-2">
                  {video.title}
                </CardTitle>
                {getStatusBadge(video.status)}
              </div>
              <CardDescription>
                {video.slices > 0 ? `${video.slices} slices created` : "Processing..."} •{" "}
                {new Date(video.createdAt).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};