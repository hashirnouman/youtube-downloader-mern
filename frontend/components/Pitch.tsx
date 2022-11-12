import React from "react";
import { H1, P1 } from "./Typography";
import styled from "styled-components";
type Props = {};
const Wrapper = styled.div`
  padding-top: 150px;
`;
const Pitch = (props: Props) => {
  return (
    <Wrapper>
      <H1 size={25}>Youtube Video Downloader - Youtube to MP3 Converter</H1>

      <P1>
        Yts1.co allows you to download & convert videos from YouTube to Mp3, and
        Mp4 in HD quality. <br />
        yts1.co youtube downloader supports downloading all video formats such{" "}
        <br /> as MP4, M4V, MKV, 3GP, WMV, FLV, MO, MP3, WEBM, etc. <br /> You
        can easily download & convert unlimited videos from YouTube for free.
      </P1>
    </Wrapper>
  );
};

export default Pitch;
