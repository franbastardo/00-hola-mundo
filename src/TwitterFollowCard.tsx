import { useState } from "react";

interface TwitterFollowCardProps {
  username: string;
  children: any;
  initialIsFollowing: boolean
}

export function TwitterFollowCard({
  children,
  username,
  initialIsFollowing,
}: TwitterFollowCardProps) {
  const formatUserName = (username: string) => `@${username}`;
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const handleClick = () => { 
    setIsFollowing(!isFollowing)
  }

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const imageSrc = `https://unavatar.io/${username}`;
  console.log(isFollowing);
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar de reddit"
          src={imageSrc}
        />
        <div className="tw-followCard-info ">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(username)}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
