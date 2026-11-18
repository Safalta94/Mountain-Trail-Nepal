interface BannerVideoProps {
  video: string;
  poster: string;
}

export default function BannerVideo({ video, poster }: BannerVideoProps) {
  return (
    <div className="banner__media">
      <video
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="banner__overlay" />
    </div>
  );
}