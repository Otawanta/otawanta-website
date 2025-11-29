// Asset paths configuration
// Update these paths when you add your actual media files

const BASE_PATH = import.meta.env.MODE === 'production' ? '/otawanta-website' : '';

export const ASSETS = {
  // Logo and branding
  logo: `${BASE_PATH}/icons/logo.jpeg`,
  logoWhite: `${BASE_PATH}/icons/logo.jpeg`,
  favicon: `${BASE_PATH}/icons/favicon.ico`,

  // Hero section
  hero: {
    backgroundImage: `${BASE_PATH}/images/hero/hero-bg.png`,
    artistPhoto: `${BASE_PATH}/images/hero/artist-photo.jpg`,
    videoBackground: `${BASE_PATH}/videos/hero-background.mp4`,
  },

  // Gallery/Visual section
  gallery: [
    `${BASE_PATH}/images/gallery/gallery-1.jpg`,
    `${BASE_PATH}/images/gallery/gallery-2.jpg`,
    `${BASE_PATH}/images/gallery/gallery-4.JPG`,
    `${BASE_PATH}/images/gallery/gallery-5.JPG`,
    `${BASE_PATH}/images/gallery/gallery-6.JPG`,
    `${BASE_PATH}/images/gallery/gallery-1.jpg`, // Using gallery-1 as fallback for 6th slot
  ],

  // Merchandise
  merch: [
    {
      id: 1,
      name: 'OTAWANTA Black Tee',
      image: `${BASE_PATH}/images/merch/black-tee.jpg`,
    },
    {
      id: 2,
      name: 'Minimal Logo Cap',
      image: `${BASE_PATH}/images/merch/logo-cap.jpg`,
    },
    {
      id: 3,
      name: 'Limited Edition Vinyl',
      image: `${BASE_PATH}/images/merch/vinyl.jpg`,
    },
    {
      id: 4,
      name: 'Tech House Hoodie',
      image: `${BASE_PATH}/images/merch/hoodie.jpg`,
    },
  ],

  // Videos
  videos: [
    {
      id: 1,
      title: 'OTAWANTA - Deep Vibes Live Set',
      thumbnail: `${BASE_PATH}/images/gallery/video-thumb-1.jpg`,
      videoFile: `${BASE_PATH}/videos/live-set-1.mp4`,
    },
    {
      id: 2,
      title: 'Studio Sessions - Behind the Scenes',
      thumbnail: `${BASE_PATH}/images/gallery/video-thumb-2.jpg`,
      videoFile: `${BASE_PATH}/videos/studio-session.mp4`,
    },
  ],

  // Audio/Music
  audio: {
    backgroundMusic: `${BASE_PATH}/audio/ambient-background.mp3`,
    trackPreviews: [
      `${BASE_PATH}/audio/track-1-preview.mp3`,
      `${BASE_PATH}/audio/track-2-preview.mp3`,
      `${BASE_PATH}/audio/track-3-preview.mp3`,
    ],
  },

  // Contact/Background images
  contact: {
    backgroundImage: `${BASE_PATH}/images/gallery/gallery-2.jpg`,
  },

  // Social media placeholder images
  social: {
    spotifyPlaylist: `${BASE_PATH}/images/spotify-playlist-cover.jpg`,
    youtubeChannelArt: `${BASE_PATH}/images/youtube-channel-art.jpg`,
  }
};

// Fallback images (you can keep some as placeholders until you have actual content)
export const FALLBACK_ASSETS = {
  logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZmZmZiI+T1RBV0FOVEE8L3RleHQ+PC9zdmc+',
  placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMzNzM3MzciLz48dGV4dCB4PSIyMDAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOTk5OTk5Ij5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4='
};