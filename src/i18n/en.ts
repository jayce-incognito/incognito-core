import { getEnvs } from 'src/core/utils';

const getImgSrcFromNode = () => `${getEnvs().SOURCE_DOMAIN}/images/node`;
const getImgSrcFromUse = () => `${getEnvs().SOURCE_DOMAIN}/images/use`;
export default {
  microsite: {
    metaTags: {
      title: `Send Bitcoin anonymously. Power privacy.`,
      metas: [
        {
          name: 'description',
          content: `Store and send Bitcoin anonymously, as well as Ethereum and any other cryptocurrency. Trade on the first ever fully anonymous crypto exchange. Turn all your coins into privacy coins. Be a validator, earn passive income, and power privacy for the world. What will you do first?`
        },
        {
          name: 'og:description',
          content: `Store and send Bitcoin anonymously, as well as Ethereum and any other cryptocurrency. Trade on the first ever fully anonymous crypto exchange. Turn all your coins into privacy coins. Be a validator, earn passive income, and power privacy for the world. What will you do first?`
        },
        {
          name: 'twitter:description',
          content: `Store and send Bitcoin anonymously, as well as Ethereum and any other cryptocurrency. Trade on the first ever fully anonymous crypto exchange. Turn all your coins into privacy coins. Be a validator, earn passive income, and power privacy for the world. What will you do first?`
        },
        {
          propperty: 'og:image',
          content: `${getEnvs().SOURCE_DOMAIN}/images/Aboutus.png`
        }
      ]
    },
    intro: {
      left: 'INCOGNITO MODE',
      right: 'FOR YOUR CRYPTO'
    },
    left: {
      title: 'Power the network.',
      desc: 'Earn crypto for giving others privacy.',
      btnText: 'Power'
    },
    right: {
      title: 'Use the network.',
      desc: 'Send, receive and store crypto privately.',
      btnText: 'Use'
    }
  },
  header: {
    power: 'power',
    use: 'use',
    trade: 'trade',
    create: 'create',
    explore: 'explore',
    incognito: 'incognito',
    payroll: 'payroll',
    tech: 'tech',
    blog: 'blog',
    outStory: 'out story'
  },
  sidebar: {
    openSource: 'open source',
    bootstrapped: 'bootstrapped',
    host: 'Host a Virtual Node',
    code: 'code',
    deck: 'deck (PDF)',
    whitepaper: 'whitepaper (PDF)',
    telegram: 'telegram',
    contactUs: 'contact us',
    privacy: 'Privacy & Terms',
    returnWarranty: 'Return & Warranty'
  },
  node: {
    metaTags: {
      title: `Generate bitcoin passive income with the Node home device.`,
      metas: [
        {
          name: 'description',
          content: `Node is not your typical bitcoin mining machine. It’s small, sleek, super quiet, and the most energy-efficient way to generate crypto, earning you Bitcoin, Ethereum and more for less electricity than it takes to power your toaster. Just plug and play. No coding required. No Bitcoin mining rigs allowed here.`
        },
        {
          name: 'og:description',
          content: `Node is not your typical bitcoin mining machine. It’s small, sleek, super quiet, and the most energy-efficient way to generate crypto, earning you Bitcoin, Ethereum and more for less electricity than it takes to power your toaster. Just plug and play. No coding required. No Bitcoin mining rigs allowed here.`
        },
        {
          name: 'twitter:description',
          content: `Node is not your typical bitcoin mining machine. It’s small, sleek, super quiet, and the most energy-efficient way to generate crypto, earning you Bitcoin, Ethereum and more for less electricity than it takes to power your toaster. Just plug and play. No coding required. No Bitcoin mining rigs allowed here.`
        },
        {
          property: 'og:image',
          content: `${getEnvs().SOURCE_DOMAIN}/images/Node.png`
        }
      ]
    },
    introContainer: {
      introHeading: {
        heading: 'Power privacy. Earn crypto.',
        desc:
          'Earn BTC, ETH, PRV and more, for processing confidential crypto transactions for the world.'
      },
      rightContent: {},
      leftContent: {}
    },
    benefitContainer: [
      {
        icon: `${getImgSrcFromNode()}/ff4db24.svg`,
        content: {
          title: 'Ships worldwide',
          desc: 'Anyone, anywhere, can own a<br/>Node.'
        }
      },
      {
        icon: `${getImgSrcFromNode()}/5c3af59.svg`,
        content: {
          title: '1-year warranty',
          desc: 'If something goes wrong we’ll fix<br/>it. Easy.'
        }
      },
      {
        icon: `${getImgSrcFromNode()}/ec2ae22.svg`,
        content: {
          title: '30-day trial',
          desc: 'If you don’t love your Node, return<br/>it for a full refund.'
        }
      }
    ],
    featuredContainer: {
      title: `Node is featured on`,
      sliderContents: [
        `${getImgSrcFromNode()}/ea6c6b1.svg`,
        `${getImgSrcFromNode()}/144da50.svg`,
        `${getImgSrcFromNode()}/b785ff8.svg`,
        `${getImgSrcFromNode()}/9e8c672.svg`,
        `${getImgSrcFromNode()}/71faa5c.svg`,
        `${getImgSrcFromNode()}/9c0986c.svg`,
        `${getImgSrcFromNode()}/63d7948.svg`,
        `${getImgSrcFromNode()}/e3649d1.svg`
      ]
    },
    storyContainer: `
          <h1 class="heading">Meet Node.</h1>
          <div class="content">
              <div class="group">
              <h1 class="title">The easiest way to own crypto</h1>
              <div class="description">Plug in, earn crypto. That’s about it. Node helps you collect the biggest coins of today – BTC, ETH, BNB and more – and all you need to do is turn it on.</div>
              <div class="image" > <img src="${getImgSrcFromNode()}/4e8063a.jpg"/>
                  <div class="description">Takes about a second to get started.</div>
              </div>
              <div class="image"> <img src="${getImgSrcFromNode()}/a7069d4.jpg"/>
                  <div class="description">Can’t decide? Node earns the most promising currencies on the market today.</div>
              </div>
              <div class="description">Want to keep track of your earnings? Do it from the app. Node doesn’t require babysitting (or hours spent staring at order books), so you can earn crypto while you’re chilling at the beach.</div>
              <div class="image"> <img src="${getImgSrcFromNode()}/4b89358.jpg"/>
                  <div class="description">Start, pause, resume, withdraw your earnings from the handy mobile app.</div>
              </div>
              <div class="image"> <img src="${getImgSrcFromNode()}/b7a232e.jpg"/>
                  <div class="description">Node is happy to stay at home while you travel the world.</div>
              </div>
          </div>
              <div class="group">
          <h1 class="title">The most energy-efficient way to generate crypto</h1>
          <div class="description">Node is not a less powerful mining machine. Node is something else entirely.</div>
          <div class="image"> <img src="${getImgSrcFromNode()}/d4ddbb4.jpg" />
              <div class="description">Mining rigs are so yesterday.</div>
          </div>
          <div class="description">Node earns crypto by powering a new type of protocol (Proof of Stake, for our fellow nerds out there), one that consumes substantially less energy. This means hash rates don’t apply, and you’re not in a duck-swinging battle to see who’s got the biggest,
              baddest supercomputer.</div>
          <div class="description">Node needs just 1.5kwh a day to run, so if you live in the USA, it will cost you less than 8 cents to keep Node running all day long. Node is the most low maintenance housemate/pet you’ve ever had.</div>
          <div class="image"> <img src="${getImgSrcFromNode()}/f02a653.jpg" />
              <div class="description">This is Mr. Fancy, our CEO. </div>
          </div>
      </div>
              <div class="group">
          <h1 class="title">The most ethical way to earn crypto</h1>
          <div class="description">Do you think people deserve privacy? So does Node.</div>
          <div class="description">Node is a gadget with heart. It earns rewards for powering incognito mode for the crypto world. When you switch Node on, you’re not just earning crypto, you’re also giving anyone the option to claim their right to privacy.</div>
          <div class="description">Node makes sure you’re rewarded for protecting these rights, so a percentage of every private transaction will go you. This means whenever someone sends Bitcoin privately, you get Bitcoin.</div>
          <div class="image"><img src="${getImgSrcFromNode()}/b7bc787.jpg" />
              <div class="description">Watch your rewards accumulate in real-time.</div>
          </div>
          <div class="description">Your Node will work together with thousands of other Nodes to support and sustain a decentralized, alternative network where all transactions are confidential. This means you don’t have to trust institutions, service providers and profit-driven centralized
              parties to tell you your information is safe. Node makes sure you’re in control.</div>
          <div class="image"><img src="${getImgSrcFromNode()}/35c33bd.jpg" />
              <div class="description">Be a part of something bigger. </div>
          </div>
      </div>
      <div class="group">
          <h1 class="title">Hold up. What do you mean confidential transactions?</h1>
          <div class="description">Whenever anyone sends or receives crypto - that’s recorded on a public ledger. That means anyone can search your entire crypto financial history, see how much you have, what you do with it, who you send it to, and where it comes from.</div>
          <div class="description">If you think crypto is gonna get bigger, then we have a problem. You don’t need to have anything to hide to not want to expose your bank statements to the entire world.</div>
          <div class="description">Node powers the Incognito Network. Incognito is a privacy-focused alternative, which uses advanced cryptographic techniques (zero-knowledge proofs, ring signatures and stealth addresses) to obscure the sender, receiver, and amount of every single
              transaction made on the network.</div>
          <div class="description">Node makes the application of this technology possible, for anyone who wants to claim their right to privacy. And neither the owner of a Node, or the user of the network, needs any technical expertise to earn rewards or choose privacy. That’s where
              we come in.</div>
      </div>
      <div class="group">
          <h1 class="title">Hello, from all of us.</h1>
          <div class="description">We’re a diverse team of 30+ cryptographers, distributed system researchers, programmers, and community builders - busy creating the privacy layer of the decentralized web. We also happen to be a bunch of hardware geeks who’ve shipped $100M+ of connected
              hardware worldwide, so we kind of know what we’re doing (most of the time).</div>
          <div class="image"><img src="${getImgSrcFromNode()}/6fd2f31.jpg" /></div>
          <div class="description">We came together to help open up this exciting new economy to our fellow lovers of innovation. And to make privacy simple, accessible, and most importantly, something that belongs to the people. Blockchain is often referred to as The New Internet.
              Well, this is our chance to do things differently.</div>
      </div>
      <div class="group">
          <h1 class="title">What’s in the box</h1>
          <div class="description">Chris will show you:</div>
          <div class="description"> <iframe width="100%" height="500px" src="https://www.youtube.com/embed/eXNAD4wckQI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
          <div class="description">1 x Node<br/>1 x Power cable<br/>4 x International adaptors<br/>1 x Ethernet Port<br/>1 x Thank you note</div>
      </div>
      <div class="group">
          <h1 class="title">The Node app</h1>
          <div class="description">To bring your Node online, manage it remotely and keep track of your earnings, just connect your Node to the app.</div>
          <div class="image"><img src="${getImgSrcFromNode()}/1700528.jpg" />
              <div class="description">Available on iOS and Android</div>
          </div>
      </div>
      <div class="group">
          <h1 class="title">Device Specs</h1>
          <div class="image"><img src="${getImgSrcFromNode()}/36bbfc2.png" /></div>
      </div>
      <div class="group">
          <h1 class="title">The Process</h1>
          <h3 class="subtitle">Designing the shape.</h3>
          <div class="description">We wanted Node to look a little different from the typical home device, but still elegant enough to fit in any room. Here are some early sketches.</div>
          <div class="image"><img src="${getImgSrcFromNode()}/6ab4ed4.jpg" /></div>
          <h3 class="subtitle">Crafting the mould.</h3>
          <div class="description">This part was super fun </div>
          <div class="image"><img src="${getImgSrcFromNode()}/e3988fe.jpg" /></div>
          <h3 class="subtitle">Selecting the materials.</h3>
          <div class="description">Node is made of scratch-resistant, anodized aluminum, so if takes a minor tumble, you’ll be ok. It’s lightweight (X lbs), sleek (size), and robust.</div>
          <div class="image"><img src="${getImgSrcFromNode()}/e9d7120.jpg" />
              <div class="description">Waiting to have life put in them</div>
          </div>
          <div class="image"><img src="${getImgSrcFromNode()}/28309fd.jpg" />
              <div class="description">Everyone loves a little canvas</div>
          </div>
          <h3 class="subtitle">Full speed ahead.</h3>
          <div class="description">Production of the first Nodes has already begun. Here are a few snapshots of Node coming to life.</div>
          <div class="image"><img src="${getImgSrcFromNode()}/8d31471.jpg" />
              <div class="description">Say hello to the granule mixer</div>
          </div>
          <div class="image"><img src="${getImgSrcFromNode()}/bd767b9.jpg" />
              <div class="description">2 assembled moulds looking like friendly robots</div>
          </div>
          <div class="image"><img src="${getImgSrcFromNode()}/6f56374.jpg" />
              <div class="description">Aluminum shape treatment</div>
          </div>
      </div>
      <div class="group">
          <h1 class="title">Environmental commitments</h1>
          <div class="description">We integrate sustainability into the very core of the product. By powering a PoS protocol instead of the traditional PoW, Node is an energy-efficient alternative to an environmentally wasteful industry.</div>
          <div class="description">Node is predominantly made of aluminum and canvas, both of which are widely recyclable, and constitute easily removable components. The motherboard is lead-free and can be repurposed. Node opts to be powered by external sources and thus does not contain
              a battery. Node’s packaging is made entirely out of recycled cardboard and paper – no plastic is used.</div>
      </div>
      <div class="group">
          <h1 class="title">Timeline</h1>
          <div class="image"><img src="${getImgSrcFromNode()}/ba67c25.png" /></div>
      </div>
      <div class="group">
          <h1 class="title">FAQ</h1>
          <h3 class="subtitle">Why is Node so much more efficient than traditional mining devices?</h3>
          <div class="description">Traditional mining relies on an energy-guzzling mechanism called Proof of Work (PoW). Most major blockchains have now made upgrades to Proof of Stake (PoS) - a much more efficient system. By running only the latest PoS blockchains, Node is able to
              earn you cryptocurrency for less energy than it takes to power your desktop.</div>
          <h3 class="subtitle">When will Node ship?</h3>
          <div class="description">Node will begin shipping in November with priority for the first orders.</div>
          <h3 class="subtitle">How much electricity does it consume?</h3>
          <div class="description">Node is very energy efficient. At maximum capacity, it consumers ~1.5 kWh a day. On average, it consumes less than ~1 kWh a day. In the US, that’s about $0.08 a day.</div>
          <h3 class="subtitle">What is the return policy?</h3>
          <div class="description">If you don’t love your Node, simply return it within 30 days for a full refund. No questions asked.</div>
          <h3 class="subtitle">Which countries are Node available in?</h3>
          <div class="description">Node ships worldwide and ships quickly through our international warehouse partners in North America, Europe and Asia.</div>
          <h3 class="subtitle">How long does it take to set up Node?</h3>
          <div class="description">Plug it in. Connect to WiFi. Let it run. That’s it!</div>
          <h3 class="subtitle">How quiet is Node?</h3>
          <div class="description">Node is extremely quiet, even when it operates at maximum capacity. You can set up Node anywhere. On the kitchen counter, in your bedroom, or in the office.</div>
          <h3 class="subtitle">Which currencies can Node earn?</h3>
          <div class="description">Node earns Incognito’s native coin, Privacy (PRV), for every block created. Since Node offers incognito mode for multiple currencies from multiple blockchains, it can also collect transaction fees in multiple cryptocurrencies (BTC, ETH, BNB, and more).</div>
          <h3
              class="subtitle">Are my dollar earnings fixed?</h3>
              <div class="description">The fiat value of what Node earns is variable, due to the volatility of the crypto market. Users are free at any time to withdraw their rewards and cash out to fiat. Via the Node app, users will be able to see the USD value of their assets at
                  any given time, and be able to make decisions on whether or not they would like to withdraw.</div>
              <h3 class="subtitle">How much will I earn?</h3>
              <div class="description">The money Node will make is dependent on how many people use the network to send and receive crypto privately (BTC, ETH, BNB, etc.). While we are hesitant to give exact numbers as there are many variables, we are confident in advertising minimum
                  earnings around the $25/month range (at today's market price). Node earns rewards for powering privacy for the token economy, and as such, its value is tied to the network's usage. Please only purchase Node if you believe what it does is useful
                  or meaningful.</div>
        </div>
      </div>
`,
    subContainer: {
      title: `Be the first to hear about updates.`,
      desc: `Drop your email below to stay up-to-date on the latest features and releases.`,
      form: {
        inputEmail: `Enter your email`,
        btnSubmit: `Be the first`,
        btnLoading: 'Sending...',
        msgSubSuccess: 'Your email has been subscribed!'
      }
    }
  },
  errors: {
    validEmail: 'Please enter a valid email address',
    emptyEmail: 'Please enter an email'
  },
  use: {
    metaTags: {
      title: `Send Bitcoin anonymously. Make your bitcoin untraceable.`,
      metas: [
        {
          name: 'description',
          content: `Looking to send Bitcoin anonymously? Now you can stay completely anonymous when you send Bitcoin, Ethereum or any other cryptocurrency. Use the Incognito anonymous bitcoin wallet to hide your bitcoin activity from prying eyes. Turn all your coins into privacy coins.`
        },
        {
          name: 'og:description',
          content: `Looking to send Bitcoin anonymously? Now you can stay completely anonymous when you send Bitcoin, Ethereum or any other cryptocurrency. Use the Incognito anonymous bitcoin wallet to hide your bitcoin activity from prying eyes. Turn all your coins into privacy coins.`
        },
        {
          name: 'twitter:description',
          content: `Looking to send Bitcoin anonymously? Now you can stay completely anonymous when you send Bitcoin, Ethereum or any other cryptocurrency. Use the Incognito anonymous bitcoin wallet to hide your bitcoin activity from prying eyes. Turn all your coins into privacy coins.`
        },
        {
          propperty: 'og:image',
          content: `${getEnvs().SOURCE_DOMAIN}/images/wallet.png`
        }
      ]
    },
    introContainer: {
      title: `Send Bitcoin<br/> <span class="highlight">anonymously</span>`,
      desc: `Hide your Bitcoin activity from prying eyes with a single tap. This multi-currency anonymous crypto wallet allows you to <span class="highlight">transact without a trace. </span> Turn on privacy for your BTC, ETH, DAI and more.`
    },
    sectionContainer: [
      {
        title: `Isn’t crypto already private?`,
        desc: `No. Right now, anyone can find out how much Bitcoin you have and what you do with it. Every single detail of your crypto finances is displayed for the world to see. Find that a little uncomfortable? Time to protect your privacy.`,
        src: `${getImgSrcFromUse()}/e6c2b26.png`
      },
      {
        title: `Stop others from searching your address and tracking your activity`,
        desc: `Go invisible, be untraceable, choose privacy. Obscure senders, receivers, amounts and histories with a single tap. Every transaction made with the Incognito Wallet is privacy-protected. Now no one can snoop through your crypto finances.`,
        src: `${getImgSrcFromUse()}/81f729d.png`
      },
      {
        title: `Turn all your coins into privacy coins`,
        desc: `Incognito isn’t just another privacy coin like Zcash or Monero. Incognito turns all your favorite coins into privacy coins. One tap to turn your Bitcoin into privacy Bitcoin. One tap to turn it public again. You’ve found the most convenient way to transact anonymously.`,
        src: `${getImgSrcFromUse()}/cece796.png`
      }
    ],
    hookContainer: {
      title: `Ready to go Incognito?`,
      desc: `Just download the wallet.`
    }
  }
};
