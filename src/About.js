import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class About extends React.Component {
  render() {
    return (
      <>
        <Header />

        <h1 class="heading1">About us</h1>
        <hr class="line1" />
        <br />

        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="abouttext">
                <h1 class="savenature">Save Nature</h1>
                <p>
                  Nature, in the broadest sense, is the natural, physical,
                  material world or universe. "Nature" can refer to the
                  phenomena of the physical world, and also to life in general.
                  The study of nature is a large, if not the only, part of
                  science. Although humans are part of nature, human activity is
                  often understood as a separate category from other natural
                  phenomena.
                </p>
                <br />
                <p>
                  The word nature is borrowed from the Old French nature and is
                  derived from the Latin word natura, or "essential qualities,
                  innate disposition", and in ancient times, literally meant
                  "birth
                </p>
                <p>
                  Within the various uses of the word today, "nature" often
                  refers to geology and wildlife. Nature can refer to the
                  general realm of living plants and animals, and in some cases
                  to the processe s associated with inanimate objects—the way
                  that particular types of things{" "}
                </p>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="aboutpic">
                <img
                  src="https://st2.depositphotos.com/1001941/8159/v/950/depositphotos_81595318-stock-illustration-creative-tree-for-save-nature.jpg"
                  width="100%"
                  height="90%"
                />
              </div>
            </div>

            <div class="col-sm-6">
              <div class="aboutpic">
                <img
                  src="https://cdn.slidesharecdn.com/ss_thumbnails/saveanimals2-140713211735-phpapp02-thumbnail-4.jpg?cb=1409556947"
                  width="100%"
                  height="90%"
                />
              </div>
            </div>

            <div class="col-sm-6">
              <div class="abouttext">
                <h1 class="savenature">Save Animal</h1>
                <p>
                  Animal welfare is the well-being of non-human animals. Formal
                  standards of animal welfare vary between contexts, but are
                  debated mostly by animal welfare groups, legislators, and
                  academics. Animal welfare science uses measures such as
                  longevity, disease, immunosuppression, behavior, physiology,
                  and reproduction, although there is debate about which of
                  these best indicate animal welfare.
                </p>
                <br />
                <p>
                  This article is about the treatment of animals. For the
                  journal, see Animal Welfare (journal). For current laws on
                  animal welfare around the world, see Animal rights by country
                  or territory. For a timeline of animal welfare, see Timeline
                  of animal welfare and rights.
                </p>
                <p>
                  A number of animal welfare organisations are campaigning to
                  achieve a Universal Declaration on Animal Welfare (UDAW) at
                  the United Nations. In principle, the Universa
                </p>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="abouttext">
                <h1 class="savenature">Save Plants </h1>
                <p>
                  Plants are mainly multicellular organisms, predominantly
                  photosynthetic eukaryotes of the kingdom Plantae.
                  Historically, plants were treated as one of two kingdoms
                  including all living things that were not animals, and all
                  algae and fungi were treated as plants. However, all current
                  definitions of Plantae exclude the fungi and some algae, as
                  well as the prokaryotes (the archaea and bacteria). By one
                  definition, plants form the clade Viridiplantae (Latin name
                  for "green plants"), a group that includes the flowering
                  plants, conifers and other gymnosperms, ferns and their
                  allies, hornworts, liverworts, mosses, and the green algae,
                  but excludes the red and brown algae.
                </p>

                <br />
                <p>
                  The word nature is borrowed from the Old French nature and is
                  derived from the Latin word natura, or "essential qualities,
                  innate disposition", and in ancient times, literally meant
                  "birth
                </p>
                <p>
                  When the name Plantae or plant is applied to a specific group
                  of organisms or taxon, it usually refers to one of four
                  concepts. From least to most inclusive, these four groupings
                  are:{" "}
                </p>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="aboutpic">
                <img
                  src="https://sterlingwealthmanagement.com/wp-content/uploads/2014/11/Sterling-Service-tree-in-hands-504.jpg"
                  width="100%"
                  height="90%"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
