import React from 'react'

import about1 from '../../image/about1.png'
import about2 from '../../image/about2.png'
import about3 from '../../image/about3.png'
import about4 from '../../image/about4.png'



import './about.css'

const About = () => {
  return (
    <div className='componentFirst aboutBC'>
      <div className='componentSecond'>
        <div className='about'>
          <div className='aboutLeft'>
            <div className='aboutBox'>
              <img src={about1} alt='' className='aboutBoxIMG1' />
            </div>
          </div>
          <div className='aboutRight'>
            <div className='aboutRightTop'>
              <div className='aboutBox'>
                <img src={about2} alt='' className='aboutBoxIMG2' />
              </div>
            </div>
            <div className='aboutRightBottom'>
              <div className='aboutRightBottomLeft'>
                <div className='aboutBox'>
                  <img src={about3} alt='' className='aboutBoxIMG3' />
                </div>
              </div>
              <div className='aboutRightBottomRight'>
                <div className='aboutBox aboutBoxLast'>
                  <img src={about4} alt='' className='aboutBoxIMG3' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='aboutTextContainer'>
          <div className='aboutTitle textHighlight'>ABOUT</div>
          <div className='aboutText'>
            What is your essence? What stars were aligned the moment you were born? What makes you unique?
          </div>
          <div className='aboutText'>
            By discovering more about the cosmic bodies that ever surround us, we discover more about ourselves.
          </div>
          <div className='aboutText'>
            The stars, the planets, the Moon and the Earth are ever-changing. Although their paths through the sky
            can be predicted, they are never the same. For each of us, there was a specific arrangement of these
            satellites the moment we entered the world which determines their effect on the rest of our lives.
          </div>
          <div className='aboutText'>
            This is our Alchemy. The elements, chakras, and essences of our past and future are all under the
            the influence of the spiraling galaxy we call home. Rigorous analysis of the positions, velocities,
            angles and arrangements of our cosmic influencers reveals truths about ourselves as deep as the universe.
          </div>
          <div className='aboutText aboutAnchor'>
            Alchm NFTs are these truths embodied as spiritual beings bearing the nature of our personal alchemy.
            By entering the time and place of your birth, every arrangement and motion of the stars is calculated
            relative to you, and your unique alchemical identity is algorithmically generated and given to its
            rightful owner - you.
          </div>
          <div className='aboutText'>
            Alchm is unlike any other NFT collection on Earth. Just like people, no two Alchm NFTs are the same, and there
            is no limit on how many can exist. Your Alchm NFT has no random features, and is completely customized and 
            unique to you. By minting, you gain permanent access to limitless information about your astrology and
            identity through our sites and apps.
          </div>
          <div className='aboutText'>
            Be brave. Be infinitely curious. Be unstoppable. Mint your Alchm Avatar to face yourself, and face your
            destiny.
          </div>
          <div className='aboutText'>
            Own your Alchemy.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
