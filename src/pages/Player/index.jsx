import React, { useState, useRef, useEffect } from "react";

import { IoIosHeart, IoIosHeartDislike } from "react-icons/io";
import { MdPlayArrow, MdPause } from "react-icons/md";
import { TiMediaFastForward, TiMediaRewind } from "react-icons/ti";
import {
  Container,
  ContainerContent,
  ContainerInfo,
  ContainerProgressiveBar,
  Progressive,
  ComandsMusics,
} from "./styles";

import ElasticHeart from "../../musics/elastic.mp3";
import Fire from "../../musics/fire.mp3";
import Paradise from "../../musics/paradise.mp3";
import { Header } from "../../components/Header";

const musics = [
  {
    id: 1,
    music: ElasticHeart,
    image:
      "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1422285855/content-items/001/194/232/aa7187e58b3c93c6589fa1ec2e0a5be0-original.jpg?1422285855",
    name: "Elastic Heart",
    author: "Sia",
    authorImage:
      "https://www.midiorama.com/wp-content/uploads/2016/12/sia-1-920x627.jpg",
  },
  {
    id: 2,
    music: Fire,
    image: "https://i1.sndcdn.com/artworks-000175632405-von107-t500x500.jpg",
    name: "Fire meet Gasoline",
    author: "Sia",
    authorImage:
      "https://www.midiorama.com/wp-content/uploads/2016/12/sia-1-920x627.jpg",
  },
  {
    id: 3,
    music: Paradise,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YJFLO4uDxlPX-R49EhpABnJM4Hw9TTc64tHhZyH3SY8rrwhLfezZvhZ2X9Ou6SjVCOs&usqp=CAU",
    name: "Paradise",
    author: "Coldplay",
    authorImage:
      "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/11/Coldplay.jpg",
  },
];

export function MusicPlayer() {
  const musicRef = useRef();
  const rangeRef = useRef();
  const animationRef = useRef();

  const [counter, setCounter] = useState(0);
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurretTime] = useState(0);

  useEffect(() => {
    const seconds = Math.floor(musicRef.current.duration);
    setDuration(seconds);
    rangeRef.current.max = seconds;
  }, [musicRef?.current?.currentTime, musicRef?.current?.readyState]);

  function handleNextMusic() {
    counter < musics.length - 1 && setCounter(counter + 1);
    setPlay(false);
    const time = musicRef.current?.duration;
    transformTime(time);
  }

  function handlePrevMusic() {
    counter > 0 && setCounter(counter - 1);
    setPlay(false);
    const time = musicRef.current?.duration;
    transformTime(time);
  }

  function handlePlayMusic() {
    setPlay(true);
    musicRef.current.play();
    const time = musicRef.current?.duration;
    transformTime(time);
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  function hadnlePauseMusic() {
    setPlay(false);
    musicRef.current.pause();
    cancelAnimationFrame(animationRef.current);
  }

  function transformTime(time) {
    const minutes = time / 60;
    const string = minutes.toString();
    setTime(string.substring(0, 4));
  }

  function changeRange() {
    musicRef.current.currentTime = rangeRef.current.value;
    changePlayerCurrentTime();
  }
  function whilePlaying() {
    rangeRef.current.value = musicRef.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }
  function changePlayerCurrentTime() {
    rangeRef.current.style.setProperty(
      "--seek-before-width",
      `${(rangeRef.current.value / duration) * 100}%`
    );
    setCurretTime(rangeRef.current.value);
  }
  function calculateDuration(secs) {
    const minutes = Math.floor(secs / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMinutes}:${returnedSeconds}`;
  }
  console.log(musicRef);
  console.log(time);
  return (
    <Container>
      <Header />
      <ContainerContent>
        <div className="img">
          <img src={musics[counter].image} alt={musics[counter].name} />
        </div>
        <ContainerInfo>
          <div className="infomusic">
            <h2>{musics[counter].name}</h2>
            <p>{musics[counter].author}</p>
          </div>
          <div className="containerSvg">
            <div>
              <IoIosHeart />
            </div>
            <div>
              <IoIosHeartDislike />
            </div>
          </div>
          <div>
            <div className="imgauthor">
              <img
                src={musics[counter].authorImage}
                alt={musics[counter].author}
              />
              <p>{musics[counter].author}</p>
            </div>
          </div>
        </ContainerInfo>
      </ContainerContent>
      <ContainerProgressiveBar>
        <div className="time">
          <p>{calculateDuration(currentTime)}</p>
          <p>{duration && !isNaN(duration) && calculateDuration(duration)}</p>
          <audio
            src={counter === 0 ? ElasticHeart : counter === 1 ? Fire : Paradise}
            ref={musicRef}
          ></audio>
        </div>
        <input
          type="range"
          className="progessBar"
          defaultValue="0"
          ref={rangeRef}
          onChange={changeRange}
        />
      </ContainerProgressiveBar>
      <ComandsMusics>
        <div>
          <TiMediaRewind onClick={handlePrevMusic} />
        </div>
        <div>
          {play ? (
            <MdPause onClick={hadnlePauseMusic} />
          ) : (
            <MdPlayArrow onClick={handlePlayMusic} />
          )}
        </div>
        <div>
          <TiMediaFastForward onClick={handleNextMusic} />
        </div>
      </ComandsMusics>
    </Container>
  );
}
