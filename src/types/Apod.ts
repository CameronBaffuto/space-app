export type Apod = {
    date: string;
    explanation: string;
    title: string;
    url: string;
    hdurl?: string;
    media_type: 'image' | 'video';
    service_version: string;
    copyright?: string;
    concept_tags?: boolean;
    concepts?: string[];
    thumbnail_url?: string;
    resource?: Record<string, unknown>;
};
  