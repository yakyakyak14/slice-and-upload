export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
          youtube_access_token: string | null
          youtube_channel_id: string | null
          youtube_channel_name: string | null
          youtube_refresh_token: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
          youtube_access_token?: string | null
          youtube_channel_id?: string | null
          youtube_channel_name?: string | null
          youtube_refresh_token?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
          youtube_access_token?: string | null
          youtube_channel_id?: string | null
          youtube_channel_name?: string | null
          youtube_refresh_token?: string | null
        }
        Relationships: []
      }
      slices: {
        Row: {
          created_at: string
          description: string | null
          end_time: number
          file_url: string | null
          id: string
          keywords: string[] | null
          start_time: number
          title: string | null
          updated_at: string
          upload_status: string | null
          uploaded_at: string | null
          user_id: string
          video_id: string
          youtube_video_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          end_time: number
          file_url?: string | null
          id?: string
          keywords?: string[] | null
          start_time: number
          title?: string | null
          updated_at?: string
          upload_status?: string | null
          uploaded_at?: string | null
          user_id: string
          video_id: string
          youtube_video_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          end_time?: number
          file_url?: string | null
          id?: string
          keywords?: string[] | null
          start_time?: number
          title?: string | null
          updated_at?: string
          upload_status?: string | null
          uploaded_at?: string | null
          user_id?: string
          video_id?: string
          youtube_video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "slices_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      "Tube Slize database": {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      upload_jobs: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          status: string | null
          total_slices: number
          updated_at: string
          uploaded_slices: number | null
          user_id: string
          video_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          status?: string | null
          total_slices: number
          updated_at?: string
          uploaded_slices?: number | null
          user_id: string
          video_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          status?: string | null
          total_slices?: number
          updated_at?: string
          uploaded_slices?: number | null
          user_id?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "upload_jobs_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          auto_slice_channel: boolean | null
          auto_upload: boolean | null
          created_at: string
          default_slice_count: number | null
          default_slice_length: number | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          auto_slice_channel?: boolean | null
          auto_upload?: boolean | null
          created_at?: string
          default_slice_count?: number | null
          default_slice_length?: number | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          auto_slice_channel?: boolean | null
          auto_upload?: boolean | null
          created_at?: string
          default_slice_count?: number | null
          default_slice_length?: number | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          channel_id: string | null
          channel_name: string | null
          created_at: string
          description: string | null
          duration: number | null
          id: string
          slice_count: number | null
          slice_length: number | null
          status: string | null
          thumbnail_url: string | null
          title: string | null
          updated_at: string
          user_id: string
          youtube_url: string
        }
        Insert: {
          channel_id?: string | null
          channel_name?: string | null
          created_at?: string
          description?: string | null
          duration?: number | null
          id?: string
          slice_count?: number | null
          slice_length?: number | null
          status?: string | null
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string
          user_id: string
          youtube_url: string
        }
        Update: {
          channel_id?: string | null
          channel_name?: string | null
          created_at?: string
          description?: string | null
          duration?: number | null
          id?: string
          slice_count?: number | null
          slice_length?: number | null
          status?: string | null
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string
          user_id?: string
          youtube_url?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
