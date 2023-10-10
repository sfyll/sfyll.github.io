<template>
    <div class="about">
        <div class="md:flex md:mt-8 mb-24 items-center justify-between">
        <section class="md:w-full">
            <h2 class="subheading">Open Source Work</h2>
            <div>
                <ul class="list">
                <li><a href="https://pull.sfyl.xyz" target="_blank"><code>selecte-application</code></a>: selectively disclose content. a pull-driven and anonymous process.</li>
                <li><a href="https://github.com/keep-starknet-strange/madara/pull/967" target="_blank"><code>Madara &lt;&gt; Celestia</code></a>: use celestia as data-availability layer for the madara client</li>
                <li><a href="https://github.com/SFYLL/TweetYourClippings" target="_blank"><code>TweetYourClippings</code></a>: randomly share your kindle clippings on twitter</li>
                <li><a href="https://github.com/SFYLL/OptimisticRelaying" target="_blank"><code>OptimisticRelaying</code></a>: builder-proposer dispute resolution protocol</li>
                <li><a href="https://www.sfyl.xyz/InvolutionZKP/" target="_blank"><code>InvolutionZKP</code></a>: educational zero-knowledge protocol with built-in frontend highlighting low redundancy properties</li>
                <li><a href="https://github.com/SFYLL/enigma_capital" target="_blank"><code>enigma_capital</code></a>: modular financial secretary, run your finances as daemon</li>
                </ul>
            </div>
            <h2 class="subheading">Closed Source Work</h2>
            <div>
                <ul class="list">
                    <li><a href="https://wintermute.com" target="_blank"><code>Wintermute</code></a>: defi</li>
                    <li><a href="https://natixis.groupebpce.com" target="_blank"><code>Natixis</code></a>: equity derivatives</li>
                </ul>
            </div>
            <h2 class="subheading">Publications</h2>
            <div>
                <ul class="list">
                    <li><a href="https://github.com/SFYLL/FinalThesis" target="_blank"><code>Final Thesis</code></a>: a predictive model for bookings during live football events</li>
                </ul>
            </div>
        </section>
        </div>    
    </div>
</template>


<script>
import { useMeta } from 'vue-meta'
export default {
    components: {
    },
    setup () {
        useMeta({
        title: "The about section of sfyl",
        htmlAttrs: { lang: 'en', amp: true },
        description: "A quick summary of my different works",
        og: {
            title: "The about section of sfyl",
            description: 'A quick summary of my different works',
            image:"https://www.sfyl.xyz/favicon.ico"
        },
        twitter: {
            card: "summary",
            site: "@SFYLL"
        }
      })
    },
}
</script>