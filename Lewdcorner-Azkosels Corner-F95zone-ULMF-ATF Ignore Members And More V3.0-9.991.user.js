// ==UserScript==
// @name         Lewdcorner/Azkosels Corner/F95zone/ULMF/ATF Ignore Members And More V3.0
// @namespace    http://tampermonkey.net
// @version      9.996
// @description  ignore members and more in xenforo forums
// @author       You
// @match        https://lewdcorner.com/threads/*
// @match        https://lewdcorner.com/direct-messages/*
// @match        https://new.lewdcorner.com/threads/*
// @match        https://lewdcorner.com/donate/*
// @match        https://lewdcorner.com/rewards/*
// @match        https://new.lewdcorner.com/rewards/*
// @match        https://new.lewdcorner.com/donate/*
// @match        https://new.lewdcorner.com/direct-messages/*
// @match        https://azkoselscorner.com/index.php?threads/*
// @match        https://azkoselscorner.com/index.php?direct-messages/*
// @match        https://azkoselscorner.com/index.php?account/preference*
// @match        https://azkoselscorner.com/index.php?pages/latestupdates*
// @match        https://azkoselscorner.com/threads/*
// @match        https://azkoselscorner.com/direct-messages/*
// @match        https://azkoselscorner.com/account/preference*
// @match        https://f95zone.to/threads/*
// @match        https://f95zone.to/direct-messages/*
// @match        https://f95zone.to/account/preference*
// @match        https://ulmf.org/threads/*
// @match        https://ulmf.org/direct-messages/*
// @match        https://ulmf.org/account/preference*
// @match        https://allthefallen.moe/forum/index.php?threads/*
// @match        https://allthefallen.moe/forum/index.php?direct-messages/*
// @match        https://allthefallen.moe/forum/index.php?account/preference*
// @match        https://lewdcorner.com
// @match        https://new.lewdcorner.com
// @match        https://f95zone.to
// @match        https://azkoselscorner.com/index.php
// @match        https://allthefallen.moe/forum/index.php
// @match        https://ulmf.org
// @match        https://lewdcorner.com/forums/*
// @match        https://new.lewdcorner.com/forums/*
// @match        https://f95zone.to/forums/*
// @match        https://ulmf.org/forums/*
// @match        https://azkoselscorner.com/index.php?forums/*
// @match        https://azkoselscorner.com/forums/*
// @match        https://allthefallen.moe/forum/index.php?forums/*
// @match        https://lewdcorner.com/tags/*
// @match        https://new.lewdcorner.com/tags/*
// @match        https://f95zone.to/tags/*
// @match        https://ulmf.org/tags/*
// @match        https://azkoselscorner.com/index.php?tags/*
// @match        https://azkoselscorner.com/tags/*
// @match        https://allthefallen.moe/forum/index.php?tags/*
// @match        https://lewdcorner.com/latest-updatesv2*
// @match        https://lewdcorner.com/latest-updates*
// @match        https://lewdcorner.com/latest-updates.php*
// @match        https://f95zone.to/sam/latest_alpha/*
// @match        https://new.lewdcorner.com/latest-updatesv2*
// @match        https://new.lewdcorner.com/latest-updates*
// @match        https://new.lewdcorner.com/latest-updates.php*
// @match        https://lewdcorner.com/search/*
// @match        https://lewdcorner.com/booru/*
// @match        https://lewdcorner.com/help/*
// @match        https://lewdcorner.com/support/*
// @match        https://lewdcorner.com/banned-users-list/*
// @match        https://lewdcorner.com/economy/*
// @match        https://lewdcorner.com/members/*
// @match        https://lewdcorner.com/featured/*
// @match        https://lewdcorner.com/whats-new/*
// @match        https://lewdcorner.com/account/*
// @match        https://lewdcorner.com/dbtech-credits/*
// @match        https://lewdcorner.com/threads-ratings-overview/*
// @match        https://lewdcorner.com/watched/*
// @match        https://lewdcorner.com/categories/*
// @match        https://lewdcorner.com/online/*
// @match        https://lewdcorner.com/dbtech-shop/*
// @match        https://lewdcorner.com/casino/*
// @match        https://new.lewdcorner.com/search/*
// @match        https://new.lewdcorner.com/booru/*
// @match        https://new.lewdcorner.com/help/*
// @match        https://new.lewdcorner.com/support/*
// @match        https://new.lewdcorner.com/banned-users-list/*
// @match        https://new.lewdcorner.com/economy/*
// @match        https://new.lewdcorner.com/members/*
// @match        https://new.lewdcorner.com/featured/*
// @match        https://new.lewdcorner.com/whats-new/*
// @match        https://new.lewdcorner.com/account/*
// @match        https://new.lewdcorner.com/dbtech-credits/*
// @match        https://new.lewdcorner.com/threads-ratings-overview/*
// @match        https://new.lewdcorner.com/watched/*
// @match        https://new.lewdcorner.com/categories/*
// @match        https://new.lewdcorner.com/online/*
// @match        https://new.lewdcorner.com/dbtech-shop/*
// @match        https://new.lewdcorner.com/casino/*
// @match        https://lewdcorner.com/reset_my_mess
// @match        https://new.lewdcorner.com/reset_my_mess
// @match        https://allthefallen.moe/reset_my_mess
// @match        https://f95zone.to/reset_my_mess
// @match        https://azkoselscorner.com/reset_my_mess
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant GM_setValue
// @grant GM_getValue
// @run-at       document-start
// @require https://code.jquery.com/jquery-3.6.0.min.js
// @license wolfitdm
// @downloadURL https://update.greasyfork.org/scripts/590203/LewdcornerAzkosels%20CornerF95zoneULMFATF%20Ignore%20Members%20And%20More%20V30.user.js
// @updateURL https://update.greasyfork.org/scripts/590203/LewdcornerAzkosels%20CornerF95zoneULMFATF%20Ignore%20Members%20And%20More%20V30.meta.js
// ==/UserScript==

// All XenForo Forums

var useIgnoreButtons = true;
var useXenforoIgnoreUserButton = true; // Account preferences
var useXenforoFollowUserButton = true; // Account preferences
var useIgnoreUserButtons = true; // Account preferences
var useIgnoreTagsButtons = true; // Account preferences
var useIgnoreDevsButtons = true; // Account preferences
var useIgnoreReactionsButtons = true; // Account preferences
var useIgnoreRanksButtons = true; // Account preferences
var useIgnoreSignaturesButtons = true; // Account preferences
var useIgnoreBadgesButtons = true; // Account Preferences
var useKeywordAll = true; // Account preferences
var ignoreAllAds = true; // Account preferences
var useNewView = true; // Account preferences
var useQuickMenuButtonLCVisibleGroups = true; // Account preferences
var useQuickMenuButtonLCAccountPreferences = true; // Account preferences

// LC Economy

var lcEnableDisabledButtonsInEconomy = true; // Account preferences

// Threads

var ignoreMembers = ["user1", "user2", "user3"];
var ignoreReactionsMembers = ["user1", "user2", "user3"];
var ignoreSignatureMembers = ["user1", "user2", "user3"];
var ignoreTags = [];
var ignoreDevs = [];
var ignoreAlsoStartedThreadsByIgnoreMembers = true;
var ignoreAlsoRepliesByIgnoreMembers = true;
var ignoreTagsByClick = true;
var ignoreSignaturesByClick = true;
var ignoreReactionsByClick = true;
var ignoreMembersInTheSidebar = true;
var ignoreMembersInTheSidebarByClick = false;
var ignoreLCBadgesByClick = true;
var ignoreMembersAll = false;
var ignoreReactionsAll = false;

// Direct Messages

var ignoreMembersDirectMessages = ["user1", "user2", "user3"];
var ignoreMembersDirectMessagesReactions = ["user1", "user2", "user3"];
var ignoreSignatureDirectMessagesMembers = ["user1", "user2", "user3"];
var ignoreMembersDirectMessagesAll = false; // Account preferences
var ignoreMembersDirectMessagesReactionsAll = false; // Account preferences

// Threads and direct messges

var ignoreSignaturesAll = false; // Account preferences

// LC Threads and Direct Messages

var ignoreLCBanners = [];
var ignoreLCBadgesMembers = ["user1", "user2", "user3"];
var ignoreLCDonationBanners = true; // Account preferences
var lcFixThreadAndMessagesLinks = true; // Account preferences
var ignoreLCBadges = false; // Account preferences
var ignoreMessageBlockedMessageLC = false; // Account preferences
var ignoreLCWhiteSpaceSoMuchYouCan = false; // Account preferences

// ------------------------------------------------

// CODE DONT'T TOUCH THIS PLEASE

// -----------------------------------------------

useNewView = getBoolValue("useNewView");
ignoreLCBadges = getBoolValue("ignoreLCBadges");
ignoreMessageBlockedMessageLC = getBoolValue("ignoreMessageBlockedMessageLC");
ignoreLCWhiteSpaceSoMuchYouCan = getBoolValue("ignoreLCWhiteSpaceSoMuchYouCan");

var ignoreLCBannersOld = ["t1", "t2", "t3", "t4", "t5", "t6", "Registered", "Lewd", "VIPplus", "UwU", "Godly", "Donator", "Donator2"];
var ignoreTagsOld = ["VN", "DAZ", "Hand Drawn", "Ren'Py", "Complete", "AI", "RPGM", "ports", "Hiatus", "Abondened", "Loli", "animated", "2d game", "sleep sex", "RPG", "Patreon", "Active"];
var ignoreDevsOld = ["EthanKrautz"];

function resetBoolValue(name) {
    let value = eval(name);
    GM_setValue(name + "Xenforo", value);
    var val = value ? "true" : "false";
    var fullValue = name + " = " + val + ";";
    eval(fullValue);
    return value;
}

function getBoolValue(name) {
    let value = eval(name);
    var origValue = GM_getValue(name + "Xenforo", value);
    return origValue;
}

function setBoolValue(name, set) {
    var val = set ? "true" : "false";
    var fullValue = name + " = " + val + ";";
    eval(fullValue);
    GM_setValue(name + "Xenforo", set);
}

function isString(wert) {
    return typeof wert === 'string' || wert instanceof String;
}

function safeArray(a) {
    var b = [];
    a.forEach((element, index) => {
        if (element === undefined || element === null || !isString(element) || element.length == 0) {
            return;
        }
        b.push(element);
    });
    return b;
}

ignoreMembers = safeArray(ignoreMembers);
ignoreDevs = safeArray(ignoreDevs);
ignoreReactionsMembers = safeArray(ignoreReactionsMembers);
ignoreTags = safeArray(ignoreTags);
ignoreMembersDirectMessages = safeArray(ignoreMembersDirectMessages);
ignoreMembersDirectMessagesReactions = safeArray(ignoreMembersDirectMessagesReactions);
ignoreSignatureMembers = safeArray(ignoreSignatureMembers);
ignoreSignatureDirectMessagesMembers = safeArray(ignoreSignatureDirectMessagesMembers);
ignoreLCBanners = safeArray(ignoreLCBanners);
ignoreLCBadgesMembers = safeArray(ignoreLCBadgesMembers);

function waitForElement(selector, callback) {
    const observer = new MutationObserver((mutations, observer) => {
        const element = document.querySelector(selector);
        if (element) {
            observer.disconnect();
            callback(element);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

var useSameId = true;

function GM_addStyle_old(css, id) {
  if (useSameId) {
    id = "";
  }
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626" + id;
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}
function GM_addStyle(css, id) {
  try {
      GM_addStyle_old(css, id);
  } catch (error) {
      console.error(error);
  }
}

function getNIDS(nid) {
    return ".notice.js-notice.notice--primary[data-notice-id='" +nid +"']";
}

function ignoreLCDonBanners() {
    ignoreLCDonationBanners = getBoolValue("ignoreLCDonationBanners");
    ignoreAllAds = getBoolValue("ignoreAllAds");
    if (ignoreLCDonationBanners || ignoreAllAds) {
        GM_addStyle(".p-navgroup-link.lcGoalOrb, .jbrsDonateNotice, .jbrsDonateNotice--double, .jblcDonateNotice, .jbrsMonthEndNotice, .stfrtDonateBubble, .jbrsWeekly, .stfrtDonateBubble.is-unavailable, " + getNIDS("110") + ", " + getNIDS("98") + ", .lcMonthlySupport { display: none !important; }", "12");
        $(document).ready(function() {
            waitForElement('.stfrtDonate-liteBtn.stfrtDonate-hideToday', function(element) {
                $(element).trigger("click");
            });
        });
    }
}

function ignoreAdsBanners() {
    ignoreAllAds = getBoolValue("ignoreAllAds");
    if (ignoreAllAds) {
        GM_addStyle(getNIDS("109") + ",.notice--enablePush,#tn7k9m2x,.jblcMemberGuide.jblcMemberGuide--banner,.notices.notices--block.notices--isMulti.js-notices," + getNIDS("90") + "," + getNIDS("116") + "," + getNIDS("261") + "," + getNIDS("274") + "," + getNIDS("10") + "," + getNIDS("4") + " { display: none !important; }", "1200000");
    }
}

ignoreAdsBanners();

var homePage = window.location.href;

function swLC(site) {
    var oldsss = "https://lewdcorner.com";
    var newsss = "https://new.lewdcorner.com";
    return homePage.startsWith(oldsss + site) || homePage.startsWith(newsss + site);
}

function tIsLCHome() {
    return homePage == "https://lewdcorner.com/" || homePage == "https://new.lewdcorner.com/";
}

var thisIsLc = swLC("/");

if (thisIsLc) {
   ignoreLCDonBanners();
}

function ewLC(site, usePrefix) {
    var oldsss = "https://lewdcorner.com";
    var newsss = "https://new.lewdcorner.com";

    if (usePrefix) {
        var ts1 = oldsss + site;
        var ts2 = newsss + site;
        var test1 = homePage.endsWith(ts1);
        var test2 = homePage.endsWith(ts2);
        return test1 || test2;
    } else {
        return homePage.endsWith(site);
    }
}

var isLCEconomy = swLC("/economy/");
function alwaysClaimInterestF() {
    lcEnableDisabledButtonsInEconomy = getBoolValue("lcEnableDisabledButtonsInEconomy");
    var isLCEconomyAllowed = lcEnableDisabledButtonsInEconomy && isLCEconomy;
    var isLCCasino = ewLC("?section=games", false);
    var isLCVault = ewLC("?section=vault", false);
    isLCEconomyAllowed = isLCEconomyAllowed && (isLCCasino || isLCVault);
    if (isLCEconomyAllowed) {
        function alwaysClaimInterestFunc() {
             $('.jblcEconomy .button[disabled], .jblcEconomy [aria-disabled="true"], jblcEconomy-vaultActions button[disabled], button[disabled], .lcCasino-cardPlay, .lcCasino-passPurchase .lcCasino-accessPrimary').removeAttr("disabled");
        };
        window.addEventListener("load", function() {
             alwaysClaimInterestFunc();
        });
        $(document).ready(function() {
            if (isLCCasino) {
                setInterval(alwaysClaimInterestFunc, 1000);
            }
        });
    }
}

var ignoreMembersOriginal = [...ignoreMembers];
var ignoreMembersDirectMessagesOriginal = [...ignoreMembersDirectMessages];
var ignoreTagsOriginal = [...ignoreTags];
var ignoreReactionsMembersOriginal = [...ignoreReactionsMembers];
var ignoreSignatureMembersOriginal = [...ignoreSignatureMembers];
var ignoreMembersDirectMessagesReactionsOriginal = [...ignoreMembersDirectMessagesReactions];
var ignoreSignatureDirectMessagesMembersOriginal = [...ignoreSignatureDirectMessagesMembers];
var ignoreLCBannersOriginal = [...ignoreLCBanners];
var ignoreLCBadgesMembersOriginal = [...ignoreLCBadgesMembers];
var ignoreDevsOriginal = [...ignoreDevs];

setBoolValue("useIgnoreButtons", true);
useIgnoreButtons = getBoolValue("useIgnoreButtons");
if (useIgnoreButtons) {
   ignoreLCBanners = GM_getValue("ignoreLCRanks", JSON.stringify(ignoreLCBannersOriginal));
   ignoreLCBanners = JSON.parse(ignoreLCBanners);
   ignoreLCBanners = safeArray(ignoreLCBanners);
   ignoreTags = GM_getValue("ignoreXenForoTags", JSON.stringify(ignoreTagsOriginal));
   ignoreTags = JSON.parse(ignoreTags);
   ignoreTags = safeArray(ignoreTags);
   ignoreDevs = GM_getValue("ignoreXenForoDevs", JSON.stringify(ignoreDevsOriginal));
   ignoreDevs = JSON.parse(ignoreDevs);
   ignoreDevs = safeArray(ignoreDevs);
   ignoreReactionsMembers = GM_getValue("ignoreXenForoRUsers", JSON.stringify(ignoreReactionsMembersOriginal));
   ignoreReactionsMembers = JSON.parse(ignoreReactionsMembers);
   ignoreReactionsMembers = safeArray(ignoreReactionsMembers);
   ignoreMembersDirectMessagesReactions = GM_getValue("ignoreXenForoRDMUsers", JSON.stringify(ignoreMembersDirectMessagesReactionsOriginal));
   ignoreMembersDirectMessagesReactions = JSON.parse(ignoreMembersDirectMessagesReactions);
   ignoreMembersDirectMessagesReactions = safeArray(ignoreMembersDirectMessagesReactions);
   ignoreSignatureMembers = GM_getValue("ignoreXenForoSigUsers", JSON.stringify(ignoreSignatureMembersOriginal));
   ignoreSignatureMembers = JSON.parse(ignoreSignatureMembers);
   ignoreSignatureMembers = safeArray(ignoreSignatureMembers);
   ignoreSignatureDirectMessagesMembers = GM_getValue("ignoreXenForoSigDMUsers", JSON.stringify(ignoreSignatureDirectMessagesMembersOriginal));
   ignoreSignatureDirectMessagesMembers = JSON.parse(ignoreSignatureDirectMessagesMembers);
   ignoreSignatureDirectMessagesMembers = safeArray(ignoreSignatureDirectMessagesMembers);
   ignoreLCBadgesMembers = GM_getValue("ignoreXenForoLCBadgesUsers", JSON.stringify(ignoreLCBadgesMembersOriginal));
   ignoreLCBadgesMembers = JSON.parse(ignoreLCBadgesMembers);
   ignoreLCBadgesMembers = safeArray(ignoreLCBadgesMembers);
}

var isLCHome = tIsLCHome();
var isF95Home = homePage == "https://f95zone.to/";
var isF95Page = homePage.startsWith("https://f95zone.to");
var isLCPage = homePage.startsWith("https://lewdcorner.com") || homePage.startsWith("https://new.lewdcorner.com");
var isULMFHome = homePage == "https://ulmf.org/";
var isACHome = homePage == "https://azkoselscorner.com/index.php";
var isATFHome = homePage == "https://allthefallen.moe/forum/index.php";
var isHome = isLCHome || isF95Home || isACHome || isATFHome;

(function($) {
    // 1. Define the custom method on jQuery's prototype
    $.fn.cone = function(eventType, callback) {
        // 'this' represents the jQuery selector collection
        return this.each(function() {
            var $element = $(this);
            if ($element.hasClass("bindme-ele-xenforo")) {
                return true;
            }
            $element.toggleClass("bindme-ele-xenforo", true);
            // 2. Bind the standard event listener
            $element.on(eventType, function handler(event) {
                // 3. Immediately unbind the event so it only fires ONCE
                $element.off(eventType, handler);
                // 4. Execute the user's original callback function
                return callback.apply(this, arguments);
            });
        });
    };
}(jQuery));

//setBoolValue("ignoreMembersInTheSidebar", ignoreMembersInTheSidebar);
//setBoolValue("ignoreMembersInTheSidebarByClick", ignoreMembersInTheSidebarByClick);

if (!useIgnoreButtons) {
    ignoreMembersInTheSidebar = false;
    ignoreMembersInTheSidebarByClick = false;
    setBoolValue("ignoreMembersInTheSidebar", false);
    setBoolValue("ignoreMembersInTheSidebarByClick", false);
} else {
    ignoreMembersInTheSidebar = getBoolValue("ignoreMembersInTheSidebar");
    ignoreMembersInTheSidebarByClick = getBoolValue("ignoreMembersInTheSidebarByClick");
    ignoreMembers = GM_getValue("ignoreXenForoUsers", JSON.stringify(ignoreMembers));
    ignoreMembers = JSON.parse(ignoreMembers);
    ignoreMembers = safeArray(ignoreMembers);
}

function ignoreMembersCSS() {
    var cssSelectors = [];
    ignoreMembers.forEach((element, index) => {
        cssSelectors.push("article.message.message--post.js-post[data-author='"+ element + "']");
        if (ignoreAlsoStartedThreadsByIgnoreMembers) {
            cssSelectors.push(".block-row[data-author='"+ element + "']");
            cssSelectors.push(".structItem--thread[data-author='"+ element + "']");
        }
    });

    if (ignoreMembers.length > 0) {
        var cssElement = cssSelectors.join(",");
        var cssContent = cssElement + " { display: none !important; }";
        GM_addStyle(cssContent, "1");
    }

    if (ignoreMembersAll || (ignoreMembers.includes("all") && useKeywordAll)) {
        var cssContent4 = "article.message.message--post.js-post[data-author] { display: none !important; }";
        GM_addStyle(cssContent4, "4");
        if (ignoreAlsoStartedThreadsByIgnoreMembers) {
            GM_addStyle(".block-row[data-author] { display: none !important; }", "1400999");
            GM_addStyle(".structItem--thread[data-author] { display: none !important; }", "1401000");
        }
    }
}

var faceClasses = {};
faceClasses.LC = ".lcPresence-person";
faceClasses.F95 = ".f95on-face";
faceClasses.NON = ".block-row";

function isFace(element) {
    var isF95Face = isF95Page && element.closest(faceClasses.F95).length > 0;
    var isLCFace = isLCPage && element.closest(faceClasses.LC).length > 0;
    return isF95Face || isLCFace;
}

function getFaceClass(f95onface) {
    if (!f95onface) {
        return faceClasses.NON;
    }
    if (isF95Page) {
        return faceClasses.F95;
    } else if (isLCPage) {
        return faceClasses.LC;
    } else {
        return faceClasses.NON;
    }
}

ignoreMembersInTheSidebar = getBoolValue("ignoreMembersInTheSidebar");
ignoreMembersInTheSidebarByClick = getBoolValue("ignoreMembersInTheSidebarByClick");
ignoreAlsoStartedThreadsByIgnoreMembers = getBoolValue("ignoreAlsoStartedThreadsByIgnoreMembers");
ignoreTagsByClick = getBoolValue("ignoreTagsByClick");
ignoreReactionsByClick = getBoolValue("ignoreReactionsByClick");
if (ignoreMembersInTheSidebar || ignoreMembersInTheSidebarByClick) {
   function ignoreMemberByClick(event, element, f95onface) {
      var cMember = f95onface ? element.attr("alt") : element.html().trim();
      var faceClass = getFaceClass(f95onface);
      if (ignoreMembers.includes(cMember)) {
          element.closest(faceClass).remove();
      }
      if (event === undefined) {
          return;
      }
      if (!ignoreMembersInTheSidebarByClick) {
          return;
      }
      var message = "Do you want ignore the user " + cMember + " ? ";
      if (confirm(message)) {
          var meAuthor = cMember;
          event.stopPropagation();
          event.preventDefault();
          if (!ignoreMembers.includes(meAuthor)) {
             ignoreMembers.push(meAuthor);
          }
          if (!ignoreMembersDirectMessages.includes(meAuthor)) {
               ignoreMembersDirectMessages.push(meAuthor);
          }
          GM_setValue("ignoreXenForoUsers", JSON.stringify(ignoreMembers));
          GM_setValue("ignoreXenForoUsersDM", JSON.stringify(ignoreMembersDirectMessages));
          GM_addStyle("article.message.message--conversationMessage.js-message[data-author=\""+meAuthor+"\"] { display: none !important; }", "14000");
          GM_addStyle("article.message.message--post.js-post[data-author=\""+meAuthor+"\"] { display: none !important; }", "14001");
          if (ignoreAlsoStartedThreadsByIgnoreMembers) {
              GM_addStyle(".block-row[data-author=\""+meAuthor+"\"] { display: none !important; }", "1400999");
              GM_addStyle(".structItem--thread[data-author=\""+meAuthor+"\"] { display: none !important; }", "1401000");
          }
          element.closest(faceClass).remove();
      }
   };
} else {
   function ignoreMemberByClick(event, element, f95onface) {
   };
}

if (ignoreTagsByClick) {
   function ignoreTagByClick(event) {
      var element = $(event.target);
      var elementA = element.closest("a");
      var f95onface = isFace(element);

      if (f95onface) {
          ignoreMemberByClick(event, element, true);
          return;
      }
      if (element.hasClass("username--staff") || element.hasClass("username--moderator") || element.hasClass("username--admin")) {
          ignoreMemberByClick(event, element, false);
          return;
      }
      if (elementA.length > 0) {
          var attr = elementA.attr("data-original-title");
          if (typeof attr !== 'undefined' && attr !== false && attr == "Edit tags") {
              return;
          }
      }
      if (elementA.length > 0 && elementA.hasClass("username")) {
          return;
      }
      var html = $(this).html().trim();
      html = html.replace("<em class=\"textHighlight\">","");
      html = html.replace("<em class=\"textHighlight\">","");
      html = html.replace("</em>","");
      html = html.replace("</em>","");
      html = html.trim();
      //alert(html);
      var ignore = ignoreTags.indexOf(html) > -1;
      var message = !ignore ? "Do you want ignore the Tag " + html + " ? " : "Do you want unignore the Tag " + html + " ? ";
      if (confirm(message)) {
          event.stopPropagation();
          event.preventDefault();
          if (!ignore) {
             ignoreTags.push(html);
             GM_setValue("ignoreXenForoTags", JSON.stringify(ignoreTags));
          } else {
              var index = ignoreTags.indexOf(html);
              if (index > -1) {
                  ignoreTags.splice(index, 1);
                  GM_setValue("ignoreXenForoTags", JSON.stringify(ignoreTags));
              }
          }
          alert("Ignored Tags are : " + ignoreTags.join(", "));
      }
      window.location.reload();
   };
} else {
   function ignoreTagByClick(event) {
   };
}

if (ignoreReactionsByClick) {
   function ignoreReactionByAuthor(event, author) {
      //alert(html);
      var ignore = ignoreReactionsMembers.indexOf(author) > -1;
      var message = !ignore ? "Do you want ignore the reactions by " + author + " ? " : "Do you want unignore the reactions by " + author + " ? ";
      if (confirm(message)) {
          event.stopPropagation();
          event.preventDefault();
          if (!ignore) {
             ignoreReactionsMembers.push(author);
             GM_setValue("ignoreXenForoRUsers", JSON.stringify(ignoreReactionsMembers));
             GM_setValue("ignoreXenForoRDMUsers", JSON.stringify(ignoreReactionsMembers));
          } else {
              var index = ignoreReactionsMembers.indexOf(author);
              if (index > -1) {
                  ignoreReactionsMembers.splice(index, 1);
                  GM_setValue("ignoreXenForoRUsers", JSON.stringify(ignoreReactionsMembers));
                  GM_setValue("ignoreXenForoRDMUsers", JSON.stringify(ignoreReactionsMembers));
              }
          }
          alert("Ignored Reactions By User are : " + ignoreReactionsMembers.join(", "));
          window.location.reload();
      }
   };
} else {
   function ignoreReactionByAuthor(event, author) {
   };
}

ignoreSignaturesByClick = getBoolValue("ignoreSignaturesByClick");
if (ignoreSignaturesByClick) {
   function ignoreSigByAuthor(event, author) {
      //alert(html);
      var ignore = ignoreSignatureMembers.indexOf(author) > -1;
      var message = !ignore ? "Do you want ignore the signature by " + author + " ? " : "Do you want unignore the signature by " + author + " ? ";
      if (confirm(message)) {
          event.stopPropagation();
          event.preventDefault();
          if (!ignore) {
             ignoreSignatureMembers.push(author);
             GM_setValue("ignoreXenForoSigUsers", JSON.stringify(ignoreSignatureMembers));
             GM_setValue("ignoreXenForoSigDMUsers", JSON.stringify(ignoreSignatureMembers));
          } else {
              var index = ignoreSignatureMembers.indexOf(author);
              if (index > -1) {
                  ignoreSignatureMembers.splice(index, 1);
                  GM_setValue("ignoreXenForoSigUsers", JSON.stringify(ignoreSignatureMembers));
                  GM_setValue("ignoreXenForoSigDMUsers", JSON.stringify(ignoreSignatureMembers));
              }
          }
          alert("Ignored Signature By User are : " + ignoreSignatureMembers.join(", "));
          window.location.reload();
      }
   };
} else {
   function ignoreSigByAuthor(event, author) {
   };
}

ignoreLCBadgesByClick = getBoolValue("ignoreLCBadgesByClick");
if (ignoreLCBadgesByClick) {
   function ignoreLCBadgesByAuthor(event, author) {
      var ignore = ignoreLCBadgesMembers.indexOf(author) > -1;
      var message = !ignore ? "Do you want ignore the badges by " + author + " ? " : "Do you want unignore the badges by " + author + " ? ";
      if (confirm(message)) {
          event.stopPropagation();
          event.preventDefault();
          if (!ignore) {
             ignoreLCBadgesMembers.push(author);
             GM_setValue("ignoreXenForoLCBadgesUsers", JSON.stringify(ignoreLCBadgesMembers));
          } else {
              var index = ignoreLCBadgesMembers.indexOf(author);
              if (index > -1) {
                  ignoreLCBadgesMembers.splice(index, 1);
                  GM_setValue("ignoreXenForoLCBadgesUsers", JSON.stringify(ignoreLCBadgesMembers));
              }
          }
          alert("Ignored Badges By User are : " + ignoreLCBadgesMembers.join(", "));
          window.location.reload();
      }
   };
} else {
   function ignoreLCBadgesByAuthor(event, author) {
   };
}

function buildOption(name, value, varName) {
    var ne = {};
    ne.optionClass = "xenforo" + name + "Setting";
    ne.option = "xenforo" + name + "Setting";
    ne.optionName = value;
    ne.varName = varName;
    return ne;
}

var elesss = [];
elesss.push(buildOption("IgnoreAllAds", "Ignore All Ads", "ignoreAllAds"));
elesss.push(buildOption("IgnoreLCDonationBanners", "Ignore LC Donation Banners", "ignoreLCDonationBanners"));
elesss.push(buildOption("LcEnableDisabledButtonsInEconomy", "Enable Disabled Buttons In LC Economy", "lcEnableDisabledButtonsInEconomy"));
elesss.push(buildOption("LcFixThreadAndMessagesLinks", "Make Threads Clickable in LC Posts", "lcFixThreadAndMessagesLinks"));
elesss.push(buildOption("IgnoreMessageBlockedMessageLC", "Remove the 'Content is not available by user' message in LC (which appears when a user has ignored you)", "ignoreMessageBlockedMessageLC"));
elesss.push(buildOption("IgnoreLCWhiteSpaceSoMuchYouCan", "Ignore So Much Whitespace how you can in LC", "ignoreLCWhiteSpaceSoMuchYouCan"));
elesss.push(buildOption("IgnoreLCBadgesByClick", "Ignore LC Badges By Click", "ignoreLCBadgesByClick"));
elesss.push(buildOption("UseQuickMenuButtonLCVisibleGroups", "Use Quick Menu Button Visible Groups In LC", "useQuickMenuButtonLCVisibleGroups"));
elesss.push(buildOption("UseQuickMenuButtonLCAccountPreferences", "Use Quick Menu Button Account Preferences In LC", "useQuickMenuButtonLCAccountPreferences"));
elesss.push(buildOption("UseNewView", "Use new buttons view", "useNewView"));
//elesss.push(buildOption("UseIgnoreUserButtons", "Show Ignore Buttons (please dont change that)", "useIgnoreButtons"));
elesss.push(buildOption("UseXenforoIgnoreUserButton", "Show Xenforo Ignore User Button", "useXenforoIgnoreUserButton"));
elesss.push(buildOption("UseXenforoFollowUserButton", "Show Xenforo Follow User Button", "useXenforoFollowUserButton"));
elesss.push(buildOption("UseIgnoreUserButtons", "Show Xenforo Custom Ignore User Button", "useIgnoreUserButtons"));
elesss.push(buildOption("UseIgnoreTagsButtons", "Show Xenforo Custom Ignore Tags Button", "useIgnoreTagsButtons"));
elesss.push(buildOption("UseIgnoreDevsButtons", "Show Xenforo Custom Ignore Devs Button", "useIgnoreDevsButtons"));
elesss.push(buildOption("UseIgnoreReactionsButtons", "Show Xenforo Custom Ignore Reactions Button", "useIgnoreReactionsButtons"));
elesss.push(buildOption("UseIgnoreRanksButtons", "Show Xenforo Custom Ignore Ranks Button", "useIgnoreRanksButtons"));
elesss.push(buildOption("UseIgnoreSignaturesButtons", "Show Xenforo Custom Ignore Signatures Button", "useIgnoreSignaturesButtons"));
elesss.push(buildOption("UseIgnoreBadgesButtons", "Show Xenforo Custom Ignore Badges Button", "useIgnoreBadgesButtons"));
elesss.push(buildOption("UseKeywordAll", "You can use the keyword all for ignoring all", "useKeywordAll"));
elesss.push(buildOption("IgnoreAlsoStartedThreadsByIgnoreMembers", "Ignore Also Started Threads By Ignore Members", "ignoreAlsoStartedThreadsByIgnoreMembers"));
elesss.push(buildOption("IgnoreAlsoRepliesByIgnoreMembers", "Ignore Also Replies By Ignore Members", "ignoreAlsoRepliesByIgnoreMembers"));
elesss.push(buildOption("IgnoreTagsByClick", "Ignore Tags By Click", "ignoreTagsByClick"));
elesss.push(buildOption("IgnoreSignaturesByClick", "Ignore Signatures By Click", "ignoreSignaturesByClick"));
elesss.push(buildOption("IgnoreReactionsByClick", "Ignore Reactions By Click", "ignoreReactionsByClick"));
elesss.push(buildOption("IgnoreMembersInTheSidebar", "Ignore Members In The Sidebar", "ignoreMembersInTheSidebar"));
elesss.push(buildOption("IgnoreMembersInTheSidebarByClick", "Ignore Members In The Sidebar By Click", "ignoreMembersInTheSidebarByClick"));
elesss.push(buildOption("IgnoreMembersAll", "Ignore All Members", "ignoreMembersAll"));
elesss.push(buildOption("IgnoreReactionsAll", "Ignore All Reactions", "ignoreReactionsAll"));
elesss.push(buildOption("IgnoreMembersDirectMessagesAll", "Ignore All Direct Messages By Members", "ignoreMembersDirectMessagesAll"));
elesss.push(buildOption("IgnoreMembersDirectMessagesReactionsAll", "Ignore All Reactions In Direct Messages By Members", "ignoreMembersDirectMessagesReactionsAll"));
elesss.push(buildOption("IgnoreSignaturesAll", "Ignore All Signatures", "ignoreSignaturesAll"));

function reset_my_mess() {
   elesss.forEach((element, index) => {
       resetBoolValue(element.varName);
   });
   setBoolValue("useIgnoreButtons", useIgnoreButtons);
   setBoolValue("ignoreMembersInTheSidebar", ignoreMembersInTheSidebar);
   setBoolValue("ignoreMembersInTheSidebarByClick", ignoreMembersInTheSidebarByClick);
   ignoreMembers = [...ignoreMembersOriginal];
   ignoreMembersDirectMessages = [...ignoreMembersDirectMessagesOriginal];
   GM_setValue("ignoreXenForoUsers", JSON.stringify(ignoreMembers));
   GM_setValue("ignoreXenForoUsersDM", JSON.stringify(ignoreMembersDirectMessages));
   ignoreTags = [...ignoreTagsOriginal];
   GM_setValue("ignoreXenForoTags", JSON.stringify(ignoreTagsOriginal));
   ignoreReactionsMembers = [...ignoreReactionsMembersOriginal];
   ignoreMembersDirectMessagesReactions = [...ignoreMembersDirectMessagesReactionsOriginal];
   GM_setValue("ignoreXenForoRUsers", JSON.stringify(ignoreReactionsMembers));
   GM_setValue("ignoreXenForoRDMUsers", JSON.stringify(ignoreMembersDirectMessagesReactions));
   ignoreLCBanners = [...ignoreLCBannersOriginal];
   GM_setValue("ignoreLCRanks", JSON.stringify(ignoreLCBanners));
   ignoreSignatureMembers = [...ignoreSignatureMembersOriginal];
   ignoreSignatureDirectMessagesMembers = [...ignoreSignatureDirectMessagesMembersOriginal];
   GM_setValue("ignoreXenForoSigUsers", JSON.stringify(ignoreSignatureMembers));
   GM_setValue("ignoreXenForoSigDMUsers", JSON.stringify(ignoreSignatureDirectMessagesMembers));
   ignoreLCBadgesMembers = [...ignoreLCBadgesMembersOriginal];
   GM_setValue("ignoreXenForoLCBadgesUsers", JSON.stringify(ignoreLCBadgesMembers));
   ignoreDevs = [...ignoreDevsOriginal];
   GM_setValue("ignoreXenForoDevs", JSON.stringify(ignoreDevs));
   alert("all mess resetted");
}

function hideXenforoAll(set) {
    var hideAll = GM_getValue("hideXenforoAll", false);
    //alert(hideAll);
    if (set) {
        hideAll = !hideAll;
        GM_setValue("hideXenforoAll", hideAll);
    }
    var meSel = ".set_r, .reset_r, .reset_c_sep, .add_tags, .show_tags, .reset_tags, .set_ranks_lc_r, .reset_ranks_lc_r, .set_sig_lc_r, .reset_sig_lc_r, .set_badges_lc_r, .reset_badges_lc_r, .ignore_xenforo_user, .follow_xenforo_user, .ignore_custom_member, .reset_custom_member, .reset_devs, .set_devs";
    $(meSel).toggleClass("none", hideAll);
    $(meSel).toggleClass("really", hideAll);
    $("body[data-template=\"thread_view\"] .block--messages article.message.message--post .message-actionBar").toggleClass("really", hideAll);
    $(meSel).toggleClass("hidden", hideAll);
    $(".hide_xenforo_all_hide").toggleClass("none", hideAll);
    $(".hide_xenforo_all_hide").toggleClass("really", hideAll);
    $(".hide_xenforo_all_hide").toggleClass("hidden", hideAll);
    $(".hide_xenforo_all_show").toggleClass("none", !hideAll);
    $(".hide_xenforo_all_show").toggleClass("really", !hideAll);
    $(".hide_xenforo_all_show").toggleClass("hidden", !hideAll);
    $("body[data-template='thread_view'] .message-attribution-main, html#XF body[data-template='thread_view'] .message-attribution-opposite").toggleClass("open", !hideAll);
}

function ignoreCustomMember(event, user) {
   event.preventDefault();
   var meAuthor = user;
   if (!ignoreMembers.includes(meAuthor)) {
       ignoreMembers.push(meAuthor);
   }
   if (!ignoreMembersDirectMessages.includes(meAuthor)) {
       ignoreMembersDirectMessages.push(meAuthor);
   }
   GM_setValue("ignoreXenForoUsers", JSON.stringify(ignoreMembers));
   GM_setValue("ignoreXenForoUsersDM", JSON.stringify(ignoreMembersDirectMessages));
   GM_addStyle("article.message.message--conversationMessage.js-message[data-author=\""+meAuthor+"\"] { display: none !important; }", "1400");
   GM_addStyle("article.message.message--post.js-post[data-author=\""+meAuthor+"\"] { display: none !important; }", "1401");
   if (ignoreAlsoStartedThreadsByIgnoreMembers) {
       GM_addStyle(".block-row[data-author=\""+meAuthor+"\"] { display: none !important; }", "140099");
       GM_addStyle(".structItem--thread[data-author=\""+meAuthor+"\"] { display: none !important; }", "140100");
   }
}

function hideXenforoAllShow(event) {
   event.preventDefault();
   hideXenforoAll(true);
}

function hideXenforoAllHide(event) {
   event.preventDefault();
   hideXenforoAll(true);
}

var newIgnoreMembers = GM_getValue("ignoreXenForoUsers", JSON.stringify(ignoreMembers));
var newDirectIgnoreMembers = GM_getValue("ignoreXenForoUsersDM", JSON.stringify(ignoreMembersDirectMessages));

newIgnoreMembers = JSON.parse(newIgnoreMembers);
newDirectIgnoreMembers = JSON.parse(newDirectIgnoreMembers);

newIgnoreMembers = safeArray(newIgnoreMembers);
newDirectIgnoreMembers = safeArray(newDirectIgnoreMembers);

ignoreMembers = newIgnoreMembers;
ignoreMembersDirectMessages = newDirectIgnoreMembers;

function resetIgnoreMembers(event) {
   event.preventDefault();
   GM_setValue("ignoreXenForoUsers", JSON.stringify(ignoreMembersOriginal));
   GM_setValue("ignoreXenForoUsersDM", JSON.stringify(ignoreMembersDirectMessagesOriginal));
   newIgnoreMembers = GM_getValue("ignoreXenForoUsers", JSON.stringify(ignoreMembersOriginal));
   newDirectIgnoreMembers = GM_getValue("ignoreXenForoUsersDM", JSON.stringify(ignoreMembersDirectMessagesOriginal));
   newIgnoreMembers = JSON.parse(newIgnoreMembers);
   newDirectIgnoreMembers = JSON.parse(newDirectIgnoreMembers);
   ignoreMembers = newIgnoreMembers;
   ignoreMembersDirectMessages = newDirectIgnoreMembers;
   alert("Ignored Users are : " + ignoreMembers.join(", "));
   window.location.reload();
}

function setTagsEvent(event) {
    var userInput = prompt("Enter multiple tags separated by commas (e.g., " + ignoreTagsOld.join(", ") + "):", ignoreTags.join(", "));
    if (userInput === null) {
        return false;
    }
    var itemsArray = userInput ? userInput.split(',').map(item => item.trim()) : [];
    itemsArray = safeArray(itemsArray);
    ignoreTags = [...itemsArray];
    GM_setValue("ignoreXenForoTags", JSON.stringify(ignoreTags));
    alert("Ignored Tags are : " + ignoreTags.join(", "));
    window.location.reload();
}

function setIgnoreUsers(event) {
    var userInput = prompt("Enter multiple users separated by commas (e.g., Apple, Banana, Orange), if you want ignore all, use the keyword all", ignoreMembers.join(", "));
    if (userInput === null) {
        return false;
    }
    var itemsArray = userInput ? userInput.split(',').map(item => item.trim()) : [];
    itemsArray = safeArray(itemsArray);
    ignoreMembers = [...itemsArray];
    GM_setValue("ignoreXenForoUsers", JSON.stringify(ignoreMembers));
    GM_setValue("ignoreXenForoUsersDM", JSON.stringify(ignoreMembers));
    alert("Ignored Users are : " + ignoreMembers.join(", "));
}

function resetIgnoreTags(event) {
    ignoreTags = [...ignoreTagsOriginal];
    GM_setValue("ignoreXenForoTags", JSON.stringify(ignoreTagsOriginal));
    alert("Ignored Tags are : " + ignoreTags.join(", "));
    window.location.reload();
}

function setIgnoreReactions(event) {
    var userInput = prompt("Enter multiple users where you want ignore his reactions separated by commas (e.g., Apple, Banana, Orange):, if you want ignore all, use the keyword all", ignoreReactionsMembers.join(", "));
    if (userInput === null) {
        return false;
    }
    var itemsArray = userInput ? userInput.split(',').map(item => item.trim()) : [];
    itemsArray = safeArray(itemsArray);
    ignoreReactionsMembers = [...itemsArray];
    ignoreMembersDirectMessagesReactions = [...itemsArray];
    GM_setValue("ignoreXenForoRUsers", JSON.stringify(ignoreReactionsMembers));
    GM_setValue("ignoreXenForoRDMUsers", JSON.stringify(ignoreMembersDirectMessagesReactions));
    alert("Ignored User Reactions are : " + ignoreReactionsMembers.join(", "));
    window.location.reload();
}

function setResetIgnoreReactions(event) {
    ignoreReactionsMembers = [...ignoreReactionsMembersOriginal];
    ignoreMembersDirectMessagesReactions = [...ignoreMembersDirectMessagesReactionsOriginal];
    GM_setValue("ignoreXenForoRUsers", JSON.stringify(ignoreReactionsMembers));
    GM_setValue("ignoreXenForoRDMUsers", JSON.stringify(ignoreMembersDirectMessagesReactions));
    alert("Ignored User Reactions are : " + ignoreReactionsMembers.join(", "));
    window.location.reload();
}

function setRanksLC(event) {
    var userInput = prompt("Enter multiple ranks where you want ignore this rank separated by commas (e.g., " + ignoreLCBannersOld.join(", ") + "):", ignoreLCBanners.join(", "));
    if (userInput === null) {
        return false;
    }
    var itemsArray = userInput ? userInput.split(',').map(item => item.trim()) : [];
    itemsArray = safeArray(itemsArray);
    ignoreLCBanners = [...itemsArray];
    GM_setValue("ignoreLCRanks", JSON.stringify(ignoreLCBanners));
    alert("Ignored Ranks are : " + ignoreLCBanners.join(", "));
    window.location.reload();
}

function resetRanksLC(event) {
    ignoreLCBanners = [...ignoreLCBannersOriginal];
    GM_setValue("ignoreLCRanks", JSON.stringify(ignoreLCBanners));
    alert("Ignored Ranks are : " + ignoreLCBanners.join(", "));
    window.location.reload();
}

function setSignatureLC(event) {
    var userInput = prompt("Enter multiple users where you want ignore his signature separated by commas (e.g., Apple, Banana, Orange), if you want ignore all, use the keyword all", ignoreSignatureMembers.join(", "));
    if (userInput === null) {
        return false;
    }
    var itemsArray = userInput ? userInput.split(',').map(item => item.trim()) : [];
    itemsArray = safeArray(itemsArray);
    ignoreSignatureMembers = [...itemsArray];
    GM_setValue("ignoreXenForoSigUsers", JSON.stringify(ignoreSignatureMembers));
    GM_setValue("ignoreXenForoSigDMUsers", JSON.stringify(ignoreSignatureMembers));
    alert("Ignored User signatures are : " + ignoreSignatureMembers.join(", "));
    window.location.reload();
}

function resetSignatureLC(event) {
    ignoreSignatureMembers = [...ignoreSignatureMembersOriginal];
    ignoreSignatureDirectMessagesMembers = [...ignoreSignatureDirectMessagesMembersOriginal];
    GM_setValue("ignoreXenForoSigUsers", JSON.stringify(ignoreSignatureMembers));
    GM_setValue("ignoreXenForoSigDMUsers", JSON.stringify(ignoreSignatureDirectMessagesMembers));
    alert("Ignored User signatures are : " + ignoreSignatureMembers.join(", "));
    window.location.reload();
}

function setBadgesLC(event) {
    var userInput = prompt("Enter multiple users where you want ignore his badges separated by commas (e.g., Apple, Banana, Orange), if you want ignore all, use the keyword all", ignoreLCBadgesMembers.join(", "));
    if (userInput === null) {
        return false;
    }
    var itemsArray = userInput ? userInput.split(',').map(item => item.trim()) : [];
    itemsArray = safeArray(itemsArray);
    ignoreLCBadgesMembers = [...itemsArray];
    GM_setValue("ignoreXenForoLCBadgesUsers", JSON.stringify(ignoreLCBadgesMembers));
    alert("Ignored User badges are : " + ignoreLCBadgesMembers.join(", "));
    window.location.reload();
}

function resetBadgesLC(event) {
    ignoreLCBadgesMembers = [...ignoreLCBadgesMembersOriginal];
    GM_setValue("ignoreXenForoLCBadgesUsers", JSON.stringify(ignoreLCBadgesMembers));
    alert("Ignored User badges are : " + ignoreLCBadgesMembers.join(", "));
    window.location.reload();
}

function setDevs(event) {
    var userInput = prompt("Enter multiple users (game devs) where you want ignore his game threads separated by commas (e.g., Ethan Krautz, SpermaCoctail, Orange), if you want ignore all, use the keyword all", ignoreDevs.join(", "));
    if (userInput === null) {
        return false;
    }
    var itemsArray = userInput ? userInput.split(',').map(item => item.trim()) : [];
    itemsArray = safeArray(itemsArray);
    ignoreDevs = [...itemsArray];
    GM_setValue("ignoreXenForoDevs", JSON.stringify(ignoreDevs));
    alert("Ignored Devs are : " + ignoreDevs.join(", "));
    window.location.reload();
}

function resetDevs(event) {
    ignoreDevs = [...ignoreDevsOriginal];
    GM_setValue("ignoreXenForoDevs", JSON.stringify(ignoreDevs));
    alert("Ignored Devs are : " + ignoreDevs.join(", "));
    window.location.reload();
}

function createButton(className, name) {
    var html = '<dl class="formRow '+className+'" style="height: 60px;"><dt></dt><dd><button class="button button--icon button--primary"><span class="button-text">'+name+'</span></button></dd></dl>';
    return html;
}

function buildHtmlFormSubmit(eles) {
    var html = '<dl class="formRow xenforoScriptSettingsForm"><dt><div class="formRow-labelWrapper"><label class="formRow-label">Ignore Xenforo Script Settings</label></div></dt><dd><ul class="inputChoices xenforoScriptSettings" role="group">';
    eles.forEach((element, index) => {
        var optionClass = element.optionClass;
        var option = element.option;
        var optionName = element.optionName;
        var opt = '<li class="inputChoices-choice"><label class="iconic  iconic--checkbox"><input class="'+optionClass+'" type="checkbox" name="'+option+'" value="true"><i aria-hidden="true"></i><span class="iconic-label">'+optionName+'</span></li>';
        html += opt;
    });
    html += '</ul></dd></dl>';
    html += createButton("xenforoResetAllSettings", "Reset All Xenforo Script Settings");
    html += createButton("xenforoSaveAllSettings", "Save All Xenforo Script Settings");
    html += createButton("xenforoHideAllButtons", "Hide All Xenforo Buttons");
    html += createButton("xenforoShowAllButtons", "Show All Xenforo Buttons");
    html += createButton("xenforoSetIgnoreTags", "Set Ignore Tags");
    html += createButton("xenforoResetIgnoreTags", "Reset Ignore Tags");
    html += createButton("xenforoSetIgnoreDevs", "Set Ignore Devs");
    html += createButton("xenforoResetIgnoreDevs", "Reset Ignore Devs");
    html += createButton("xenforoIgnoreCustomMembers", "Set Ignore Members");
    html += createButton("xenforoResetIgnoreCustomMembers", "Reset Ignore Members");
    html += createButton("xenforoSetIgnoreReactions", "Set Ignore Reactions");
    html += createButton("xenforoResetIgnoreReactions", "Reset Ignore Reactions");
    html += createButton("xenforoSetIgnoreRanks", "Set Ignore Ranks");
    html += createButton("xenforoResetIgnoreRanks", "Reset Ignore Ranks");
    html += createButton("xenforoSetIgnoreSignatures", "Set Ignore Signatures");
    html += createButton("xenforoResetIgnoreSignatures", "Reset Ignore Signatures");
    html += createButton("xenforoSetIgnoreBadges", "Set Ignore Badges");
    html += createButton("xenforoResetIgnoreBadges", "Reset Ignore Badges");
    $('.formSubmitRow').before(html);
    $(".formRow.xenforoResetAllSettings button").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        reset_my_mess();
        window.location.reload();
    });
    $(".formRow.xenforoHideAllButtons button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       GM_setValue("hideXenforoAll", false);
       hideXenforoAllHide(event);
       alert("all buttons hide");
    });
    $(".formRow.xenforoShowAllButtons button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       GM_setValue("hideXenforoAll", true);
       hideXenforoAllShow(event);
       alert("all buttons show");
    });
    $(".formRow.xenforoIgnoreCustomMembers button").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        setIgnoreUsers(event);
    });
    $(".formRow.xenforoResetIgnoreCustomMembers button").on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        resetIgnoreMembers(event);
    });
    $(".formRow.xenforoSetIgnoreTags button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       setTagsEvent(event);
    });
    $(".formRow.xenforoResetIgnoreTags button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       resetIgnoreTags(event);
    });
    $(".formRow.xenforoSetIgnoreReactions button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       setIgnoreReactions(event);
    });
    $(".formRow.xenforoResetIgnoreReactions button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       setResetIgnoreReactions(event);
    });
    $(".formRow.xenforoSetIgnoreRanks button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       setRanksLC(event);
    });
    $(".formRow.xenforoResetIgnoreRanks button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       resetRanksLC(event);
    });
    $(".formRow.xenforoSetIgnoreSignatures button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       setSignatureLC(event);;
    });
    $(".formRow.xenforoResetIgnoreSignatures button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       resetSignatureLC(event);
    });
    $(".formRow.xenforoSetIgnoreBadges button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       setBadgesLC(event);
    });
    $(".formRow.xenforoResetIgnoreBadges button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       resetBadgesLC(event);
    });
    $(".formRow.xenforoSetIgnoreDevs button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       setDevs(event);
    });
    $(".formRow.xenforoResetIgnoreDevs button").on('click', function(event) {
       event.preventDefault();
       event.stopPropagation();
       resetDevs(event);
    });
    var changeSetting = false;
    eles.forEach((element, index) => {
        var optionClass = element.optionClass;
        var option = element.option;
        var optionName = element.optionName;
        var variableName = element.varName;
        var checkElement = $(".formRow.xenforoScriptSettingsForm").find("."+optionClass);
        checkElement.each(function (index) {
            $(this).prop('checked', getBoolValue(variableName));
        }).on("change", function(event) {
            if ($(this).prop('checked')) {
                setBoolValue(variableName, true);
                changeSetting = true;
                //alert(variableName + " is on!");
            } else {
                setBoolValue(variableName, false);
                changeSetting = true;
                //alert(variableName + " is off!");
            }
            //window.location.reload();
        });
    });
    $(".formRow.xenforoSaveAllSettings button").on("click", function(event) {
         event.preventDefault();
         event.stopPropagation();
         alert("All Xenforo Script Settings saved!");
         window.location.reload();
    });
    $(".formSubmitRow button, button.button--icon--save").on("click", function(event) {
         setTimeout(function() {
             if (!changeSetting) {
                 return;
             }
             alert("All Xenforo Script Settings saved!");
             window.location.reload();
         }, 1000);
    });
}

function buildQuickMenuOptionLC(href, link, name) {
    return '<li><a href="'+link+'" class="lc-accountMenu-link"><i class="fa--xf far fa-user-slash "><svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><use href="'+href+'"></use></svg></i><span>'+name+'</span></a></li>';
}



window.addEventListener("load", function() {
      if (homePage.endsWith("account/preferences")) {
          buildHtmlFormSubmit(elesss);
      }
      if (swLC("/")) {
          useQuickMenuButtonLCVisibleGroups = getBoolValue("useQuickMenuButtonLCVisibleGroups");
          useQuickMenuButtonLCAccountPreferences = getBoolValue("useQuickMenuButtonLCAccountPreferences");
          if (!useQuickMenuButtonLCVisibleGroups && !useQuickMenuButtonLCAccountPreferences) {
              return;
          }
          var iid = setInterval(function() {
             var el = $(".lc-accountMenu-dashboard .lc-accountMenu-section--controls .lc-accountMenu-grid");
             if (el.length) {
                 if (useQuickMenuButtonLCVisibleGroups) {
                     el.append(buildQuickMenuOptionLC("/data/local/icons/regular.svg?v=1794109202#user-shield", "/account/visible-groups", "Visible Groups"));
                 }
                 if (useQuickMenuButtonLCAccountPreferences) {
                     el.append(buildQuickMenuOptionLC("/data/local/icons/regular.svg?v=1794109202#id-card", "/account/preferences", "Preferences"));
                 }
                 clearInterval(iid);
                 return;
             }
         }, 1000);
      };
});

useKeywordAll = getBoolValue("useKeywordAll");

if (homePage.endsWith("reset_my_mess")) {
   reset_my_mess();
   window.location.href = "/index.php";
} else if (isATFHome) {
    function ignoreATFReplies() {
        var ret = ignoreMembers.length > 0;
        if (!ret) {
            return;
        }
        $(".p-body-sidebar .contentRow .contentRow-figure a.avatar span[aria-label]").each(function (index) {
            var ele = $(this);
            var eleText = ele.attr("aria-label").trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".block-row").remove();
            }
        });
        $(".p-body-sidebar .contentRow .contentRow-figure a.avatar img[alt]").each(function (index) {
            var ele = $(this);
            var eleText = ele.attr("alt").trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".block-row").remove();
            }
        });
    }
    ignoreTagsByClick = getBoolValue("ignoreTagsByClick");
    if (ignoreTags.length > 0 || ignoreTagsByClick) {
       function ignoreATFGames() {
         if (ignoreDevs.length > 0) {
            $(".p-body-sidebar div[data-widget-definition=\"new_posts\"] .contentRow-main a:not(.username), .p-body-sidebar div[data-widget-definition=\"featured_content\"] .contentRow-main a:not(.username), .p-body-sidebar div[data-widget-definition=\"trending_content\"] .contentRow-main a:not(.username), .p-body-sidebar div[data-widget-definition=\"xfrm_new_resources\"] .contentRow-main a:not(.username)").each(function( index ) {
                var html = $(this).html();
                ignoreDevs.forEach((element4) => {
                    var testElement = "] [" + element4 + "]";
                    var testElement2 = "["+ element4 +"][Development Thread]";
                    if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                        $(this).closest("li.block-row").remove();
                    }
                });
            });
        }
        if (ignoreTagsByClick) {
            $(".p-body-sidebar .contentRow-main a.username").each(function( index ) {
                var element = $(this);
                var findSpan = element.find("span").length > 0;
                if (!findSpan) {
                    ignoreMemberByClick(undefined, element, false);
                    element.cone("click", function(event) {
                        ignoreMemberByClick(event, element, false);
                    });
                }
            });
        }
        $(".p-body-sidebar .contentRow-main a span").each(function( index ) {
            var element = $(this);
            var elementA = element.closest("a");
            if (element.hasClass("username--staff") || element.hasClass("username--moderator") || element.hasClass("username--admin")) {
                ignoreMemberByClick(undefined, element, false);
                return;
            }
            if (elementA.length > 0 && elementA.hasClass("username")) {
                return;
            }
            var html = element.html().trim();
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest("li.block-row").remove();
            }
        }).cone("click", ignoreTagByClick);
       };
       ignoreAlsoRepliesByIgnoreMembers = getBoolValue("ignoreAlsoRepliesByIgnoreMembers");
       window.addEventListener("load", function() {
         ignoreATFGames();
         if (ignoreAlsoRepliesByIgnoreMembers) {
             ignoreATFReplies();
         }
       });
       $(document).ready(function() {
         ignoreATFGames();
         setInterval(ignoreATFGames, 1000);
         if (ignoreAlsoRepliesByIgnoreMembers) {
             ignoreATFReplies();
             setInterval(ignoreATFReplies, 1000);
         }
       });
  }
} else if (isLCHome) {
    function ignoreLCReplies() {
        var ret = ignoreMembers.length > 0;
        if (!ret) {
            return;
        }
        $(".lcForumStats-member a").each(function (index) {
            var ele = $(this);
            var eleText = ele.text().trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".article").remove();
            }
        });
        $(".p-body-sidebar .contentRow .contentRow-figure a.avatar span[aria-label]").each(function (index) {
            var ele = $(this);
            var eleText = ele.attr("aria-label").trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".block-row").remove();
            }
        });
        $(".p-body-sidebar .contentRow .contentRow-figure a.avatar img[alt]").each(function (index) {
            var ele = $(this);
            var eleText = ele.attr("alt").trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".block-row").remove();
            }
        });
    }
    ignoreTagsByClick = getBoolValue("ignoreTagsByClick");
    if (ignoreTags.length > 0 || ignoreDevs.length > 0 || ignoreTagsByClick) {
       var spanFirst = RegExp.escape("<span class=\"u-srOnly\">");
       var spanLast = RegExp.escape("</span>");
       var regex = new RegExp(`${spanFirst}.+${spanLast}`, "g")
       function ignoreLCGames() {
         var ignoreString = "article.lcForumStats-row";
         var elements = document.querySelectorAll(ignoreString);
         elements.forEach((userItem) => {
            var ele2 = $(userItem).find(".lcForumStats-thread a");
            //alert(ele2.html());
            var ele = $(userItem).find(".lcForumStats-thread .lcForumStats-prefixes span");
            if (ele.length > 0) {
              ele.each(function( index ) {
                 var html = $(this).html();
                 if (html !== undefined) {
                    html = html.trim();
                    if (ignoreTags.includes(html)) {
                       $(userItem).remove();
                    }
                 }
              }).cone("click", ignoreTagByClick);
           }
           if (ignoreDevs.length > 0) {
               var ele3 = $(userItem).find(".lcForumStats-thread .lcForumStats-threadTitle");
               if (ele3.length > 0) {
                   ele3.each(function( index ) {
                       var html = $(this).html();
                       if (html !== undefined) {
                           html = html.trim();
                           html = html.replace(regex, "");
                           ignoreDevs.forEach((element4) => {
                               var testElement = "] [" + element4 + "]";
                               var testElement2 = "["+ element4 +"][Development Thread]";
                               if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                                   $(userItem).remove();
                               }
                           });
                       }
                   });
               }
           }
        });
        if (ignoreDevs.length > 0) {
            $(".p-body-sidebar div[data-widget-definition=\"new_posts\"] .contentRow-main a:not(.username)").each(function( index ) {
                var html = $(this).html();
                ignoreDevs.forEach((element4) => {
                    var testElement = "] [" + element4 + "]";
                    var testElement2 = "["+ element4 +"][Development Thread]";
                    if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                        $(this).closest("li.block-row").remove();
                    }
                });
            });
        }
        $(".p-body-sidebar .lcPresence-person a img[alt]").each(function (index ) {
            var thisElement = this;
            var element = $(thisElement);
            element.closest("a").cone("click", function(evt) {
                evt.target = thisElement;
                ignoreTagByClick(evt);
            });
            ignoreMemberByClick(undefined, element, true);
            return;
        });
        if (ignoreTagsByClick) {
            $(".p-body-sidebar .contentRow-main a.username").each(function( index ) {
                var element = $(this);
                var findSpan = element.find("span").length > 0;
                if (!findSpan) {
                    ignoreMemberByClick(undefined, element, false);
                    element.cone("click", function(event) {
                        ignoreMemberByClick(event, element, false);
                    });
                }
            });
        }
        $(".p-body-sidebar .contentRow-main a span").each(function( index ) {
            var element = $(this);
            var elementA = element.closest("a");
            if (element.hasClass("username--staff") || element.hasClass("username--moderator") || element.hasClass("username--admin")) {
                ignoreMemberByClick(undefined, element, false);
                return;
            }
            if (elementA.length > 0 && elementA.hasClass("username")) {
                return;
            }
            var html = element.html().trim();
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest("li.block-row").remove();
            }
        }).cone("click", ignoreTagByClick);
       };
       ignoreAlsoRepliesByIgnoreMembers = getBoolValue("ignoreAlsoRepliesByIgnoreMembers");
       window.addEventListener("load", function() {
         ignoreLCGames();
         if (ignoreAlsoRepliesByIgnoreMembers) {
             ignoreLCReplies();
         }
       });
       $(document).ready(function() {
         ignoreLCGames();
         setInterval(ignoreLCGames, 1000);
         if (ignoreAlsoRepliesByIgnoreMembers) {
             ignoreLCReplies();
             setInterval(ignoreLCReplies, 1000);
         }
       });
  }
} else if (isF95Home) {
    function ignoreF95Replies() {
        var ret = ignoreMembers.length > 0;
        if (!ret) {
            return;
        }
        $(".brmsContentList .itemContent .itemDetailName a").each(function (index) {
            var ele = $(this);
            var eleText = ele.text().trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".itemThread").remove();
            }
        });
        $(".p-body-sidebar .contentRow .contentRow-figure a.avatar span[aria-label]").each(function (index) {
            var ele = $(this);
            var eleText = ele.attr("aria-label").trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".block-row").remove();
            }
        });
        $(".p-body-sidebar .contentRow .contentRow-figure a.avatar img[alt]").each(function (index) {
            var ele = $(this);
            var eleText = ele.attr("alt").trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".block-row").remove();
            }
        });
    }
    ignoreTagsByClick = getBoolValue("ignoreTagsByClick");
    if (ignoreTags.length > 0 || ignoreDevs.length > 0 || ignoreTagsByClick) {
      function ignoreF95Games() {
         var ignoreString = ".brmsContentList .itemContent";
         var elements = document.querySelectorAll(ignoreString);
         elements.forEach((userItem) => {
            var ele2 = $(userItem).find(".listBlock.itemTitle a");
            //alert(ele2.html());
            var ele = $(userItem).find(".listBlock.itemTitle a span");
            if (ele.length > 0) {
              ele.each(function( index ) {
                 var html = $(this).html().trim();
                 if (html !== undefined) {
                    if (ignoreTags.includes(html)) {
                       $(userItem).remove();
                    }
                 }
              }).cone("click", ignoreTagByClick);
           }
           if (ignoreDevs.length > 0) {
               var ele3 = $(userItem).find(".listBlock.itemTitle a");
               if (ele3.length > 0) {
                   ele3.each(function( index ) {
                       var html = $(this).text();
                       if (html !== undefined) {
                           html = html.trim();
                           ignoreDevs.forEach((element4) => {
                               var testElement = "] [" + element4 + "]";
                               var testElement2 = "["+ element4 +"][Development Thread]";
                               if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                                   $(userItem).remove();
                               }
                           });
                       }
                   });
               }
           }
        });
        if (ignoreDevs.length > 0) {
            $(".p-body-sidebar div[data-widget-definition=\"new_posts\"] .contentRow-main a:not(.username)").each(function( index ) {
                var html = $(this).html();
                ignoreDevs.forEach((element4) => {
                    var testElement = "] [" + element4 + "]";
                    var testElement2 = "["+ element4 +"][Development Thread]";
                    if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                        $(this).closest("li.block-row").remove();
                    }
                });
            });
        }
        $(".p-body-sidebar .f95on-face a img[alt]").each(function (index ) {
            var thisElement = this;
            var element = $(thisElement);
            element.closest("a").cone("click", function(evt) {
                evt.target = thisElement;
                ignoreTagByClick(evt);
            });
            ignoreMemberByClick(undefined, element, true);
            return;
        });
        if (ignoreTagsByClick) {
            $(".p-body-sidebar .contentRow-main a.username").each(function( index ) {
                var element = $(this);
                var findSpan = element.find("span").length > 0;
                if (!findSpan) {
                    ignoreMemberByClick(undefined, element, false);
                    element.cone("click", function(event) {
                        ignoreMemberByClick(event, element, false);
                    });
                }
            });
        }
        $(".p-body-sidebar .contentRow-main a span").each(function( index ) {
            var element = $(this);
            var elementA = element.closest("a");
            if (element.hasClass("username--staff") || element.hasClass("username--moderator") || element.hasClass("username--admin")) {
                ignoreMemberByClick(undefined, element, false);
                return;
            }
            if (elementA.length > 0 && elementA.hasClass("username")) {
                return;
            }
            var html = element.html().trim();
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest("li.block-row").remove();
            }
        }).cone("click", ignoreTagByClick);
     };
     ignoreAlsoRepliesByIgnoreMembers = getBoolValue("ignoreAlsoRepliesByIgnoreMembers");
     window.addEventListener("load", function() {
        ignoreF95Games();
        if (ignoreAlsoRepliesByIgnoreMembers) {
            ignoreF95Replies();
        }
     });
     $(document).ready(function() {
        ignoreF95Games();
        setInterval(ignoreF95Games, 1000);
        if (ignoreAlsoRepliesByIgnoreMembers) {
            ignoreF95Replies();
            setInterval(ignoreF95Replies, 1000);
        }
     });
  }
} else if (isACHome || isULMFHome) {
    function ignoreACReplies() {
        var ret = ignoreMembers.length > 0;
        if (!ret) {
            return;
        }
        $(".forumStatsContainer .forumStats-main .dataList-table .dataList-row .dataList-cell--image a.avatar span[aria-label]").each(function (index) {
            var ele = $(this);
            var eleText = ele.attr("aria-label").trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".dataList-row").remove();
            }
        });
        $(".forumStatsContainer .forumStats-main .dataList-table .dataList-row .dataList-cell--image a.avatar img[alt]").each(function (index) {
            var ele = $(this);
            var eleText = ele.attr("alt").trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".dataList-row").remove();
            }
        });
        $(".p-body-sidebar .contentRow .contentRow-figure a.avatar span[aria-label]").each(function (index) {
            var ele = $(this);
            var eleText = ele.attr("aria-label").trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".block-row").remove();
            }
        });
        $(".p-body-sidebar .contentRow .contentRow-figure a.avatar img[alt]").each(function (index) {
            var ele = $(this);
            var eleText = ele.attr("alt").trim();
            if (ignoreMembers.includes(eleText) || (useKeywordAll && ignoreMembers.includes("all"))) {
                ele.closest(".block-row").remove();
            }
        });
    }
    ignoreTagsByClick = getBoolValue("ignoreTagsByClick");
    if (ignoreTags.length > 0 || ignoreDevs.length > 0 || ignoreTagsByClick) {
      function ignoreACGames() {
         var ignoreString = ".forumStatsContainer .forumStats-main table.dataList-table tr.dataList-row";
         var elements = document.querySelectorAll(ignoreString);
         elements.forEach((userItem) => {
            var ele2 = $(userItem).find(".dataList-textRow span[data-xf-init]");
            //alert(ele2.html());
            var ele = $(userItem).find(".dataList-textRow span[data-xf-init] span");
            if (ele.length > 0) {
              ele.each(function( index ) {
                 var html = $(this).html().trim();
                 if (html !== undefined) {
                    html = html.trim();
                    if (ignoreTags.includes(html)) {
                       $(userItem).remove();
                    }
                 }
              }).cone("click", ignoreTagByClick);
           }
           if (ignoreDevs.length > 0) {
               var ele3 = $(userItem).find(".dataList-textRow span[data-xf-init]");
               if (ele3.length > 0) {
                   ele3.each(function( index ) {
                       var html = $(this).text();
                       if (html !== undefined) {
                           html = html.trim();
                           ignoreDevs.forEach((element4) => {
                               var testElement = "] [" + element4 + "]";
                               var testElement2 = "["+ element4 +"][Development Thread]";
                               if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                                   $(userItem).remove();
                               }
                           });
                       }
                   });
               }
           }
       });
       if (ignoreDevs.length > 0) {
            $(".p-body-sidebar div[data-widget-definition=\"new_posts\"] .contentRow-main a:not(.username)").each(function( index ) {
                var html = $(this).html();
                ignoreDevs.forEach((element4) => {
                    var testElement = "] [" + element4 + "]";
                    var testElement2 = "["+ element4 +"][Development Thread]";
                    if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                        $(this).closest("li.block-row").remove();
                    }
                });
            });
       }
       if (ignoreTagsByClick) {
            $(".p-body-sidebar .contentRow-main a.username").each(function( index ) {
                var element = $(this);
                var findSpan = element.find("span").length > 0;
                if (!findSpan) {
                    ignoreMemberByClick(undefined, element, false);
                    element.cone("click", function(event) {
                        ignoreMemberByClick(event, element, false);
                    });
                }
            });
       }
       $(".p-body-sidebar .contentRow-main a span, .p-body-sidebar .contentRow-main a span").each(function( index ) {
            var element = $(this);
            var elementA = element.closest("a");
            if (element.hasClass("username--staff") || element.hasClass("username--moderator") || element.hasClass("username--admin")) {
                ignoreMemberByClick(undefined, element, false);
                return;
            }
            if (elementA.length > 0 && elementA.hasClass("username")) {
                return;
            }
            var html = element.html().trim();
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest("li.block-row").remove();
            }
       }).cone("click", ignoreTagByClick);
     };
     ignoreAlsoRepliesByIgnoreMembers = getBoolValue("ignoreAlsoRepliesByIgnoreMembers");
     window.addEventListener("load", function() {
        ignoreACGames();
        if (ignoreAlsoRepliesByIgnoreMembers) {
            ignoreACReplies();
        }
     });
     $(document).ready(function() {
        ignoreACGames();
        setInterval(ignoreACGames, 1000);
        if (ignoreAlsoRepliesByIgnoreMembers) {
            ignoreACReplies();
            setInterval(ignoreACReplies, 1000);
        }
     });
  }
}

if (homePage.startsWith("https://f95zone.to/sam/latest_alpha/")) {
    function ignoreF95LuGames1() {
         $(".resource-tile_label-wrap .resource-tile_label-wrap_left div,.resource-tile_label-wrap .resource-tile_label-wrap_right div, .resource-tile_tags span").each(function( index ) {
            var html = $(this).text().trim();
            //alert(html);
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest(".resource-tile").remove();
            }
        });
        if (ignoreDevs.length > 0) {
             $(".resource-tile_info .resource-tile_info-header .resource-tile_dev").each(function( index ) {
                 var html = $(this).text().trim();
                 //alert(html);
                 if (ignoreDevs.includes(html) || (useKeywordAll && ignoreDevs.includes("all"))) {
                     //alert(html);
                     $(this).closest(".resource-tile").remove();
                 }
             });
        }
    };
    window.addEventListener("load", function() {
        ignoreF95LuGames1();
    });
    $(document).ready(function() {
        ignoreF95LuGames1();
        setInterval(ignoreF95LuGames1, 1000);
    });
} else if (homePage.startsWith("https://azkoselscorner.com/index.php?pages/latestupdates/")) {
    function ignoreACLuGames1() {
         $(".azcLatestLayout .games .game-card .game-prefixes span, .azcLatestLayout .games .game-card .game-tags span").each(function( index ) {
            var html = $(this).text().trim();
            //alert(html);
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest(".game-card").remove();
            }
        }).cone("click", ignoreTagByClick);
        if (ignoreDevs.length > 0) {
             $(".azcLatestLayout .games .game-card .game-stat.developer").each(function( index ) {
                 var html = $(this).text().trim();
                 if (ignoreDevs.includes(html)) {
                    $(this).closest(".game-card").remove();
                 }
             });
             $(".azcLatestLayout .games .game-card .game-title[title]").each(function( index ) {
                 var html = $(this).attr("title").trim();
                 //alert(html);
                ignoreDevs.forEach((element4) => {
                   var testElement = "] [" + element4 + "]";
                   var testElement2 = "["+ element4 +"][Development Thread]";
                   if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                       $(this).closest(".structItem--thread").remove();
                   }
                });
             });
        }
    };
    window.addEventListener("load", function() {
        ignoreACLuGames1();
    });
    $(document).ready(function() {
        ignoreACLuGames1();
        setInterval(ignoreACLuGames1, 1000);
    });
} else if (swLC("/latest-updates.php")) {
    function ignoreLCLuGames1() {
         $(".card__mediaBadges .lc-badge").each(function( index ) {
            var html = $(this).html().trim();
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest(".lc-card").remove();
            }
        });
        $(".lc-tags .lc-tag").each(function( index ) {
            var html = $(this).html().trim();
            //alert(html);
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest(".lc-card").remove();
            }
        });
        if (ignoreDevs.length > 0) {
            $(".lc-developer").each(function( index ) {
                var html = $(this).attr("title").trim();
                //alert(html);
                if (ignoreDevs.includes(html) || (useKeywordAll && ignoreDevs.includes("all"))) {
                    //alert(html);
                    $(this).closest(".lc-card").remove();
                }
            });
        }
    };
    window.addEventListener("load", function() {
        ignoreLCLuGames1();
    });
    $(document).ready(function() {
        ignoreLCLuGames1();
        setInterval(ignoreLCLuGames1, 1000);
    });
} else if (swLC("/latest-updatesv2") || swLC("/latest-updates")) {
    function ignoreLCLuGames2() {
         $(".lcCardMediaBadges .lcCardBadge").each(function( index ) {
            var html = $(this).html().trim();
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest(".lcCardSlot").remove();
            }
        });
        $(".lcCardRestingTagList button").each(function( index ) {
            var html = $(this).html().trim();
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest(".lcCardSlot").remove();
            }
        });
        $(".lcCardHoverDetails .lcCardHoverTags span").each(function( index ) {
            var html = $(this).html().trim();
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest(".lcCardSlot").remove();
            }
        });
        if (ignoreDevs.length > 0) {
            $(".lcCardHoverDetails .lcCardHoverCreatorName strong").each(function( index ) {
                var html = $(this).html().trim();
                //alert(html);
                if (ignoreDevs.includes(html) || (useKeywordAll && ignoreDevs.includes("all"))) {
                    //alert(html);
                    $(this).closest(".lcCardSlot").remove();
                }
            });
        }
    };
    window.addEventListener("load", function() {
        ignoreLCLuGames2();
    });
    $(document).ready(function() {
        ignoreLCLuGames2();
        setInterval(ignoreLCLuGames2, 1000);
    });
} else if (homePage.startsWith("https://azkoselscorner.com/index.php?forums/")) {
    ignoreMembersCSS();
    function ignoreACGames1() {
         $(".thread-title-with-hover .prefix-label .label").each(function( index ) {
            var html = $(this).html().trim();
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest(".thread-widget-slider").remove();
            }
        }).cone("click", ignoreTagByClick);
        $("a.thread-title-with-hover[data-tag-list]").each(function (index ) {
           var html = $(this).data("tagList");
           //alert(html);
           //alert(html);
           ignoreTags.forEach((element, index) => {
               var tag = "</xf:if>"+ element + "<xf:if is='$i'>";
               var tag2 = "</xf:if>" + element;
               if (html.indexOf(tag) !== -1 || html.indexOf(tag2) !== -1) {
                    $(this).closest(".thread-widget-slider").remove();
               }
           });
        });
        $(".structItem-title a.labelLink span").each(function( index ) {
            var html = $(this).html().trim();
            //alert(html);
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest(".structItem--thread").remove();
            }
        }).cone("click", ignoreTagByClick);
        if (ignoreDevs.length > 0) {
            $(".structItem-title a.labelLink + a").each(function (index ) {
                var html = $(this).text().trim();
                //alert(html);
                ignoreDevs.forEach((element4) => {
                   var testElement = "] [" + element4 + "]";
                   var testElement2 = "["+ element4 +"][Development Thread]";
                   if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                       $(this).closest(".structItem--thread").remove();
                   }
                });
            });
            $("a.thread-title-with-hover[data-tag-list] .titleLU").each(function (index ) {
                var html = $(this).text().trim();
                //alert(html);
                ignoreDevs.forEach((element4) => {
                   var testElement = "] [" + element4 + "]";
                   var testElement2 = "["+ element4 +"][Development Thread]";
                   if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                       $(this).closest(".thread-widget-slider").remove();
                   }
                });
            });
        }
    };
    window.addEventListener("load", function() {
        ignoreACGames1();
    });
    $(document).ready(function() {
        ignoreACGames1();
        setInterval(ignoreACGames1, 1000);
    });
} else if (swLC("/search/") ||
           swLC("/booru/") ||
           swLC("/help/") ||
           swLC("/support/") ||
           swLC("/banned-users-list/") ||
           isLCEconomy ||
           swLC("/members/") ||
           swLC("/featured/") ||
           swLC("/whats-new/") ||
           swLC("/account/") ||
           swLC("/dbtech-credits/") ||
           swLC("/threads-ratings-overview/") ||
           swLC("/watched/") ||
           swLC("/categories/") ||
           swLC("/online/") ||
           swLC("/dbtech-shop/") ||
           swLC("/casino/") ||
           swLC("/donate/")
        ) {
  if (isLCEconomy) {
      alwaysClaimInterestF();
  }
} else if (swLC("/tags/") || homePage.startsWith("https://f95zone.to/tags/") || homePage.startsWith("https://azkoselscorner.com/index.php?tags/") || homePage.startsWith("https://allthefallen.moe/forum/index.php?tags/") || homePage.startsWith("https://ulmf.org/tags/")) {
    ignoreMembersCSS();
    function ignoreGamesX() {
         $(".contentRow-minor .tagItem").each(function( index ) {
            var html = $(this).html().trim();
            html = html.replace("<em class=\"textHighlight\">","");
            html = html.replace("<em class=\"textHighlight\">","");
            html = html.replace("</em>","");
            html = html.replace("</em>","");
            html = html.trim();
            //alert(html);
            if (ignoreTags.includes(html)) {
                //alert(html);
                $(this).closest(".block-row").remove();
            }
        }).cone("click", ignoreTagByClick);
        if (ignoreDevs.length > 0) {
            $(".contentRow-main .contentRow-title a").each(function( index ) {
                var html = $(this).text().trim();
                //alert(html);
                ignoreDevs.forEach((element4) => {
                   var testElement = "] [" + element4 + "]";
                   var testElement2 = "["+ element4 +"][Development Thread]";
                   if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                       $(this).closest(".block-row").remove();
                   }
                });
            });
        }
    };
    window.addEventListener("load", function() {
        ignoreGamesX();
    });
    $(document).ready(function() {
        ignoreGamesX();
        setInterval(ignoreGamesX, 1000);
    });
} else if (swLC("/forums/") || homePage.startsWith("https://f95zone.to/forums/") || homePage.startsWith("https://allthefallen.moe/forum/index.php?forums/") || homePage.startsWith("https://ulmf.org/forums/")) {
    ignoreMembersCSS();
    function ignoreGames1() {
         $(".structItem-title a.labelLink span, .lcGameCard-mediaBadgeLeft span, .lcGameCard-hoverPanel .lcGameCard-tags .tagList .js-tagList a, .lcForumCard .lcForumCardBody .lcForumCardTitle a span, .lcForumCard .lcForumCardBody .lcForumCardTags .lcForumCardTag").each(function( index ) {
            var html = $(this).html().trim();
            //alert(html);
            if (ignoreTags.includes(html)) {
                //alert(html);
                var removedEle = $(this).closest(".lcGameThumbRow");
                var removedEle2 = $(this).closest(".structItem--thread");
                var removedEle3 = $(this).closest(".lcForumCard");
                if (removedEle.length > 0) {
                    removedEle.remove();
                }
                if (removedEle2.length > 0) {
                    removedEle2.remove();
                }
                if (removedEle3.length > 0) {
                    removedEle3.remove();
                }
            }
        }).cone("click", ignoreTagByClick);
        if (ignoreDevs.length > 0) {
            $(".structItem-title a.labelLink + a, .lcGameCard-title a, .lcForumCard .lcForumCardBody .lcForumCardTitle a").each(function( index ) {
                var html = $(this).text().trim();
                //alert(html);
                ignoreDevs.forEach((element4) => {
                   var testElement = "] [" + element4 + "]";
                   var testElement2 = "["+ element4 +"][Development Thread]";
                   if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                       var removedEle = $(this).closest(".lcGameThumbRow");
                       var removedEle2 = $(this).closest(".structItem--thread");
                       var removedEle3 = $(this).closest(".lcForumCard");
                       if (removedEle.length > 0) {
                           removedEle.remove();
                       }
                       if (removedEle2.length > 0) {
                           removedEle2.remove();
                       }
                       if (removedEle3.length > 0) {
                           removedEle3.remove();
                       }
                   }
                });
            });
        }
    };
    window.addEventListener("load", function() {
        ignoreGames1();
    });
    $(document).ready(function() {
        ignoreGames1();
        setInterval(ignoreGames1, 1000);
    });
} else if (!isHome) {
   if (ignoreDevs.length > 0) {
       function ignoreGames3() {
            $(".p-body-header .p-title-value").each(function( index ) {
                var html = $(this).text().trim();
                //alert(html);
                ignoreDevs.forEach((element4) => {
                   var testElement = "] [" + element4 + "]";
                   var testElement2 = "["+ element4 +"][Development Thread]";
                   if (html.endsWith(testElement) || html.indexOf(testElement) > -1 || html.endsWith(testElement2) || (useKeywordAll && ignoreDevs.includes("all"))) {
                       $(".p-body-main").remove();
                       $(".p-body-pageContent").remove();
                   }
                });
            });
       };
       if (ignoreDevs.length > 0) {
           window.addEventListener("load", function() {
               ignoreGames3();
           });
           $(document).ready(function() {
               ignoreGames3();
               setInterval(ignoreGames3, 1000);
           });
       }
   }
   ignoreTagsByClick = getBoolValue("ignoreTagsByClick");
   if (ignoreTags.length > 0 || ignoreTagsByClick) {
       function ignoreGames2() {
         var ignoreString = ".p-body-header .p-title-value a";
         var elements = document.querySelectorAll(ignoreString);
         elements.forEach((userItem) => {
            var ele2 = $(userItem).find("span");
            //alert(ele2.html());
            var ele = $(userItem).find("span");
            if (ele.length > 0) {
              ele.each(function( index ) {
                 var html = $(this).html().trim();
                 if (html !== undefined) {
                    if (ignoreTags.includes(html)) {
                       $(".p-body-main").remove();
                       $(".p-body-pageContent").remove();
                    }
                 }
              }).cone("click", ignoreTagByClick);
           }
        });
        $(".p-description .tagList a").each(function( index ) {
            var html = $(this).html().trim();
            if (ignoreTags.includes(html)) {
                $(".p-body-main").remove();
                $(".p-body-pageContent").remove();
            }
        }).cone("click", ignoreTagByClick);
       };
       window.addEventListener("load", function() {
          ignoreGames2();
       });
       $(document).ready(function() {
          ignoreGames2();
          setInterval(ignoreGames2, 1000);
       });
  }

useIgnoreButtons = getBoolValue("useIgnoreButtons");
if (!useIgnoreButtons) {
    GM_setValue("ignoreXenForoUsers", JSON.stringify(ignoreMembers));
    GM_setValue("ignoreXenForoUsersDM", JSON.stringify(ignoreMembersDirectMessages));
}

ignoreMembersCSS();

ignoreMessageBlockedMessageLC = getBoolValue("ignoreMessageBlockedMessageLC");
if (ignoreMessageBlockedMessageLC) {
    GM_addStyle(".message.message--blocked { display: none !important; }", "17865865");
}

var cssSelectors10 = [];
ignoreMembersDirectMessages.forEach((element, index) => {
    cssSelectors10.push("article.message.message--conversationMessage.js-message[data-author='"+ element + "']");
});

var cssSelectors11 = [];
ignoreMembersDirectMessagesReactions.forEach((element, index) => {
    cssSelectors11.push("article.message.message--conversationMessage.js-message[data-author='"+ element + "']");
});

var cssSelectors2 = [];

ignoreReactionsMembers.forEach((element, index) => {
  cssSelectors2.push("article.message.message--post.js-post[data-author='"+ element + "']");
});

var cssSelectors3 = [];

ignoreLCBanners.forEach((element, index) => {
  cssSelectors3.push("html body div.userBanner."+ element + ".message-userBanner");
  cssSelectors3.push("html body div.f95mb-tags span.f95mb-tag." + element);
});
var cssSelectors4 = [];

ignoreSignatureMembers.forEach((element, index) => {
     cssSelectors4.push("article.message.message--post.js-post[data-author='"+ element + "']");
});

var cssSelectors40 = [];

ignoreSignatureDirectMessagesMembers.forEach((element, index) => {
     cssSelectors40.push("article.message.message--conversationMessage.js-message[data-author='"+ element + "']");
});

var cssElement2 = cssSelectors2.join(",");
var cssElement3 = cssSelectors3.join(",");
var cssElement4 = cssSelectors4.join(",");
var cssElement40 = cssSelectors40.join(",");
var cssElement10 = cssSelectors10.join(",");
var cssElement11 = cssSelectors11.join(",");
var cssContent10 = cssElement10 + " { display: none !important; }";
var cssContent11 = cssElement11 + " .reactionsBar.js-reactionsList.is-active { display: none !important; }";
var cssContent2 = cssElement2 + " .reactionsBar.js-reactionsList.is-active { display: none !important; }";
var cssContent3 = ".reactionsBar.js-reactionsList.is-active { display: none !important; }";
var cssContent5 = cssElement3 + " { display: none !important; }";
var cssContent6 = cssElement4 + " aside.message-signature { display: none !important; }";
var cssContent60 = cssElement40 + " aside.message-signature { display: none !important; }";
var cssContent7 = "article.message.message--conversationMessage.js-message[data-author] { display: none !important; }";

ignoreMembersDirectMessagesAll = getBoolValue("ignoreMembersDirectMessagesAll");
useKeywordAll = getBoolValue("useKeywordAll");
if (ignoreMembersDirectMessagesAll || (ignoreMembersDirectMessages.includes("all") && useKeywordAll)) {
    GM_addStyle(cssContent7, "15");
}

if (ignoreMembersDirectMessages.length > 0) {
    GM_addStyle(cssContent10, "13");
}

if (ignoreMembersDirectMessagesReactions.length > 0) {
    GM_addStyle(cssContent11, "14");
}

if (ignoreSignatureMembers.length > 0) {
    GM_addStyle(cssContent6, "10");
}

if (ignoreSignatureDirectMessagesMembers.length > 0) {
    GM_addStyle(cssContent60, "100");
}

ignoreSignaturesAll = getBoolValue("ignoreSignaturesAll");
if (ignoreSignaturesAll || (ignoreSignatureMembers.includes("all") && useKeywordAll)) {
    GM_addStyle("aside.message-signature { display: none !important; }", "11");
}

if (ignoreReactionsMembers.length > 0) {
   GM_addStyle(cssContent2, "2");
}

ignoreReactionsAll = getBoolValue("ignoreReactionsAll");
ignoreMembersDirectMessagesReactionsAll = getBoolValue("ignoreMembersDirectMessagesReactionsAll");
ignoreLCBadges = getBoolValue("ignoreLCBadges");
ignoreLCWhiteSpaceSoMuchYouCan = getBoolValue("ignoreLCWhiteSpaceSoMuchYouCan");
useIgnoreButtons = getBoolValue("useIgnoreButtons");
if (ignoreReactionsAll || ignoreMembersDirectMessagesReactionsAll || (ignoreReactionsMembers.includes("all") && useKeywordAll) || (ignoreMembersDirectMessagesReactions.includes("all") && useKeywordAll)) {
  GM_addStyle(cssContent3, "3");
}

if (ignoreLCBanners.length > 0) {
   GM_addStyle(cssContent5, "5");
}

if (ignoreLCBadges || (ignoreLCBadgesMembers.includes("all") && useKeywordAll)) {
   GM_addStyle("div.featuredBadges.featuredBadges--message { display: none !important; }", "6");
}

if (ignoreLCWhiteSpaceSoMuchYouCan) {
    GM_addStyle("html#XF[data-lc-uix][data-template=thread_view] .message--post .lc-v3-memberDetails>summary, html#XF[data-lc-uix][data-template=thread_view] .message--post .lc-v3-moreRanks>summary { min-height: 18px !important; padding: 0px !important }");
    GM_addStyle("html#XF[data-lc-uix][data-template=thread_view] .message--post .message-user .userBanner.lc-rank[data-lc-rank] { min-height: 22px !important; margin: 0px 0 !important; padding: 0px 1px !important; font-size: 11px !important; }");
    GM_addStyle("div.st-years-of-service, .xentr-message-container .xentr-slider-nav { padding: 0px !important; margin: 0px !important; }", "7");
    GM_addStyle("div.st-years-of-service { margin-top: 5px !important; }", "9");
    GM_addStyle("dl.pairs.pairs--justified { padding: 0 5px 0px 5px !important; }", "8");
}

if (useIgnoreButtons) {
var isLC = thisIsLc;

GM_addStyle(".message-attribution-main .reset_tags, .actionBar-set .actionBar-set--internal .reset_tags, .lc-postActionStart .reset_tags { display: inline-block !important; font-size: 12px !important;  color: unset !important; }", "1303");
GM_addStyle(".message-attribution-main .show_tags, .actionBar-set .actionBar-set--internal .show_tags, .lc-postActionStart .show_tags { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1304");
GM_addStyle(".message-attribution-main .add_tags, .actionBar-set .actionBar-set--internal .add_tags, .lc-postActionStart .add_tags { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1305");
GM_addStyle(".message-attribution-main .reset_custom_member, .actionBar-set .actionBar-set--internal .reset_custom_member, .lc-postActionStart .reset_custom_member { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1306");
GM_addStyle(".message-attribution-main .ignore_custom_member, .actionBar-set .actionBar-set--internal .ignore_custom_member, .lc-postActionStart .ignore_custom_member { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1307");
GM_addStyle(".message-attribution-main .ignore_xenforo_user, .actionBar-set .actionBar-set--internal .ignore_xenforo_user, .lc-postActionStart .ignore_xenforo_user { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1308");
GM_addStyle(".message-attribution-main .follow_xenforo_user, .actionBar-set .actionBar-set--internal .follow_xenforo_user, .lc-postActionStart .follow_xenforo_user { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1308");
GM_addStyle(".message-attribution-main .reset_r, .actionBar-set .actionBar-set--internal .reset_r, .lc-postActionStart .reset_r { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1309");
GM_addStyle(".message-attribution-main .reset_devs, .actionBar-set .actionBar-set--internal .reset_devs, .lc-postActionStart .reset_devs { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "7000");
GM_addStyle(".message-attribution-main .set_devs, .actionBar-set .actionBar-set--internal .set_devs, .lc-postActionStart .set_devs { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "7001");
GM_addStyle(".message-attribution-main .set_r, .actionBar-set .actionBar-set--internal .set_r, .lc-postActionStart .set_r { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1310");
GM_addStyle(".message-attribution-main .reset_ranks_lc_r, .actionBar-set .actionBar-set--internal .reset_ranks_lc_r, .lc-postActionStart .reset_ranks_lc_r { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1310000");
GM_addStyle(".message-attribution-main .reset_sig_lc_r, .actionBar-set .actionBar-set--internal .reset_sig_lc_r, .lc-postActionStart .reset_sig_lc_r { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1310001");
GM_addStyle(".message-attribution-main .reset_badges_lc_r, .actionBar-set .actionBar-set--internal .reset_badges_lc_r, .lc-postActionStart .reset_badges_lc_r { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1310002");
GM_addStyle(".message-attribution-main .set_ranks_lc_r, .actionBar-set .actionBar-set--internal .set_ranks_lc_r, .lc-postActionStart .set_ranks_lc_r { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1310002");
GM_addStyle(".message-attribution-main .set_sig_lc_r, .actionBar-set .actionBar-set--internal .set_sig_lc_r, .lc-postActionStart .set_sig_lc_r { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1310002");
GM_addStyle(".message-attribution-main .set_badges_lc_r, .actionBar-set .actionBar-set--internal .set_badges_lc_r, .lc-postActionStart .set_badges_lc_r { display: inline-block !important; font-size: 12px !important; color: unset !important; }", "1310002");
GM_addStyle('body[data-template="thread_view"] .block--messages article.message.message--post .message-attribution a { min-height: 0px !important; font-size: 12px !important; color: unset;}', "1201");
GM_addStyle('.message-attribution-main .reset_c_sep, .actionBar-set .actionBar-set--internal .reset_c_sep, .lc-postActionStart .reset_c_sep { font-size: 12px !important; }', "1202");
var linkColor = "color: #1472d7 !important;";
linkColor = "";
var fontSize = "12";
GM_addStyle('body[data-template="thread_view"] .block--messages article.message.message--post .message-attribution { font-size: 12px !important; }', "1203");
GM_addStyle('a.reset_ranks_lc_r, a.set_ranks_lc_r, a.add_tags, a.set_r { font-size: '+fontSize+'px !important; display: inline-block !important; padding: 0px !important; margin: 0px !important; line-height: '+fontSize+'px !important; '+linkColor+' }', "1204");
GM_addStyle('a.reset_sig_lc_r, a.set_sig_lc_r { font-size: '+fontSize+'px !important; display: inline-block !important; padding: 0px !important; margin: 0px !important; line-height: '+fontSize+'px !important; '+linkColor+' }', "1207");
GM_addStyle('a.add_tags, a.set_r, a.reset_badges_lc_r, a.set_badges_lc_r, .reset_c_sep, .lc-postActionStart a.add_tags, .lc-postActionStart a.set_r, .lc-postActionStart a.reset_badges_lc_r, .lc-postActionStart a.set_badges_lc_r, .lc-postActionStart .reset_c_sep { font-size: '+fontSize+'px !important; display: inline-block !important; padding: 0px !important; margin: 0px !important; line-height: '+fontSize+'px !important; ' +linkColor+' }', "1208");
GM_addStyle('.message-attribution-main a.hide_xenforo_all_hide, .message-attribution-main a.hide_xenforo_all_show, .actionBar-set actionBar-set--internal a.hide_xenforo_all_hide, .actionBar-set actionBar-set--internal a.hide_xenforo_all_show { font-size: '+fontSize+'px !important; display: inline-block !important; padding: 0px !important; margin: 0px !important; line-height: '+fontSize+'px !important; color: unset !important;', '1216');
GM_addStyle('.message-actionBar .actionBar-set { font-size: 13px !important }', '1205');
GM_addStyle("div.featuredBadges.featuredBadges--message.none { display: none !important; }", "1206");
if (isLC) {
    GM_addStyle("html#XF body[data-template='thread_view'] .message-attribution-main.open { display: inline-block !important; }", "900000");
}
GM_addStyle('body[data-template="thread_view"] .block--messages article.message.message--post .message-actionBar:not(.really) .actionBar-set { flex-wrap: wrap !important }', '1212');
GM_addStyle('body[data-template="thread_view"] .block--messages article.message.message--post .message-actionBar:not(.really) { flex-wrap: nowrap !important }', '1213');
GM_addStyle('body[data-template="thread_view"] .block--messages article.message.message--post .message-actionBar:not(.really) .actionBar-set--external { order: 3 !important }', '1214');
GM_addStyle('.none.really.hidden { display: none !important }', '1215');
GM_addStyle('.my_new_thread_link { color: inherit !important }', '1500');

function updateButtons() {
    useIgnoreButtons = getBoolValue("useIgnoreButtons");
    useXenforoIgnoreUserButton = getBoolValue("useXenforoIgnoreUserButton");
    useXenforoFollowUserButton = getBoolValue("useXenforoFollowUserButton");
    useIgnoreUserButtons = getBoolValue("useIgnoreUserButtons");
    useIgnoreTagsButtons = getBoolValue("useIgnoreTagsButtons");
    useIgnoreDevsButtons = getBoolValue("useIgnoreDevsButtons");
    useIgnoreReactionsButtons = getBoolValue("useIgnoreReactionsButtons");
    useIgnoreRanksButtons = getBoolValue("useIgnoreRanksButtons");
    useIgnoreSignaturesButtons = getBoolValue("useIgnoreSignaturesButtons");
    useIgnoreBadgesButtons = getBoolValue("useIgnoreBadgesButtons");
}

updateButtons();

window.addEventListener("load", function() {
    $("html body div.userBanner.message-userBanner, html body div.f95mb-tags span.f95mb-tag").each(function (index ) {
        var classes = $(this).attr('class');
        var classesArray = classes.split(/\s+/);
        var rank = classesArray[1];
        var le = "";
        if (homePage.startsWith("https://allthefallen.moe/") || homePage.startsWith("https://f95zone.to/")) {
            for (const element of classesArray) {
                if (element === "userBanner" || element === ".userBanner") {
                    le = element;
                    continue;
                }
                if (element === "Moderator") {
                    rank = element;
                    break;
                }
                if (element.startsWith("userBanner--")) {
                    rank = element;
                    break;
                }
                if (le === ".userBanner") {
                    rank = element;
                    break;
                }
            }
        }
        $(this).on("click", function(event) {
            var answer = confirm("Do you want ignore the rank " + rank + " ?");
            if (answer) {
               if (!ignoreLCBanners.includes(rank)) {
                   ignoreLCBanners.push(rank);
                   GM_setValue("ignoreLCRanks", JSON.stringify(ignoreLCBanners));
                   alert("rank " + rank + " is ignored");
                   window.location.reload();
               }
            }
        });
    });
    var elements = document.querySelectorAll("article.message[data-author]");
    var useridlink = "/search/member?user_id=";
    var postlink = "&content=post";
    var threadlink = "&content=thread";
    elements.forEach((userItem) => {
        var author = $(userItem).data("author");
        if (isLC) {
            $(userItem).find("div.featuredBadges.featuredBadges--message").each(function() {
                if (ignoreLCBadgesMembers.includes(author)) {
                   $(this).toggleClass("none", true);
                } else {
                   $(this).toggleClass("none", false);
                }
            }).on("click", function(event) {
                var target = $(event.target);
                ignoreLCBadgesByAuthor(event, author);
            });
        }
        $(userItem).find("aside.message-signature").on("click", function(event) {
            var target = $(event.target);
            if (target.is("a") || target.is("iframe") || target.is("img") || target.is('[data-src]')) {
                return;
            }
            if (target.closest('a').length > 0 || target.closest("button").length > 0 || target.closest('[class^="bbCode"], [class*=" bbCode"]').length > 0) {
                return;
            }
            if (target.closest('summary').length > 0) {
                return;
            }
            /*if (!target.hasClass("message-signature") && !target.hasClass("bbWrapper")) {
                return;
            }*/
            ignoreSigByAuthor(event, author);
        });
        $(userItem).find(".reactionsBar").on("click", function(event) {
            if (!$(event.target).hasClass("reactionsBar")) {
                return;
            }
            ignoreReactionByAuthor(event, author);
        });
        $(userItem).find("section.message-user, section.f95mb.f95mb--normal").each(function() {
            var itemlink = "";
            var userid = "";
            var t = $(this);
            var isNewF95 = t.hasClass("f95mb");
            if (!isNewF95 && lcFixThreadAndMessagesLinks) {
                var ele = $(this).find(".message-userDetails .message-name a");
                if (ele.length) {
                    itemlink = ele.attr("href");
                    userid = ele.data("userId");
                }
                $(this).find("a.fauxBlockLink-linkRow[href='/search/member?user_id="+userid+"']").attr("href", useridlink + userid + postlink);
                $(this).find(".message-userExtras dl.pairs dt, .lc-v3-memberStats dl.pairs dt").each(function() {
                    var content = $(this).html().trim();
                    var content2 = $(this).text().trim();
                    if (content === "Threads" || content2 === "Threads") {
                        var contentEle = $(this).closest("dl").find("dt + dd");
                        var newContent = contentEle.html();
                        contentEle.replaceWith("<dd><a class=\"my_new_thread_link\" href=\"" + useridlink + userid + threadlink + "\">"+ newContent +"</a></dd>");
                    }
                });
            }
            var element = isNewF95 ? undefined : $(this).attr("itemid");
            if (isNewF95) {
                var ele3 = $(this).find(".f95mb-nameLine .message-name.f95mb-name a");
                if (ele3.length) {
                    element = ele3.attr("href");
                }
            }
            if (element === undefined) {
                if (lcFixThreadAndMessagesLinks) {
                    if (itemlink.length) {
                        element = itemlink;
                    }
                } else {
                    var ele2 = $(this).find(".message-userDetails .message-name a");
                    if (ele2.length) {
                        element = ele2.attr("href");
                    }
                }
            }
            if (element !== undefined) {
               var addedElementOriginal = this;
               var addedElement = this;
               var addedElementNew = ".message-actionBar.actionBar .actionBar-set.actionBar-set--internal, .lc-postActionStart";
               addedElement = $(userItem).find(".message-attribution .message-attribution-main");
               addedElementNew = $(userItem).find(addedElementNew);
               $(addedElement).append("<a class=\"hide_xenforo_all_hide\" href=\"#\">|&nbsp;Hide</a>");
               $(addedElement).append("<a class=\"hide_xenforo_all_show\" href=\"#\">|&nbsp;Show</a>");
               if (useXenforoIgnoreUserButton) {
                   $(addedElement).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"ignore_xenforo_user\" href=\"" + element + "ignore\">Ignore User</a>");
               }
               if (useXenforoFollowUserButton) {
                   $(addedElement).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"follow_xenforo_user\" href=\"" + element + "follow\">Follow User</a>");
               }
               var useNView = getBoolValue("useNewView");
               var oldView = !useNView;
               var puttedElement = oldView ? addedElement : addedElementNew;
               var puttedElementNew = oldView ? addedElementNew : addedElement;
               if (useSameId) {
                  if (useIgnoreUserButtons) {
                      $(addedElement).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"ignore_custom_member\" data-author=\""+author+"\" href=\"#\">Hide User</a>");
                      $(puttedElement).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"reset_custom_member\" href=\"#\">Reset Ignore Users</a>");
                  }
                  if (useIgnoreTagsButtons) {
                      $(puttedElement).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"reset_tags\" href=\"#\">Reset Ignore Tags</a>");
                  }
                  if (useIgnoreReactionsButtons) {
                      $(puttedElement).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"reset_r\" href=\"#\">Reset Ignore Reactions</a>");
                  }
                  if (useIgnoreUserButtons) {
                      $(addedElement).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"show_tags\" href=\"#\">Set Ignore Users</a>");
                  }
                  if (useIgnoreDevsButtons) {
                      $(puttedElement).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"reset_devs\" href=\"#\">Reset Ignore Devs</a>");
                      $(addedElement).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"set_devs\" href=\"#\">Set Ignore Devs</a>");
                  }
                  if (useIgnoreTagsButtons) {
                      $(puttedElementNew).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"add_tags\" href=\"#\">Set Ignore Tags</a>");
                  }
                  if (useIgnoreReactionsButtons) {
                      $(puttedElementNew).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"set_r\" href=\"#\">Set Ignore Reactions</a>");
                  }
                  if (useIgnoreRanksButtons) {
                      $(addedElementNew).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"reset_ranks_lc_r\" href=\"#\">Reset Ignored Ranks</a>");
                      $(puttedElementNew).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"set_ranks_lc_r\" href=\"#\">Set Ignored Ranks</a>");
                  }
                  if (useIgnoreSignaturesButtons) {
                      $(addedElementNew).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"reset_sig_lc_r\" href=\"#\">Reset Ignore Sig</a>");
                      $(puttedElementNew).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"set_sig_lc_r\" href=\"#\">Set Ignore Sig</a>");
                  }
                  if (useIgnoreBadgesButtons) {
                      if (isLC) {
                          $(addedElementNew).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"reset_badges_lc_r\" href=\"#\">Reset Ignore Badges</a>");
                          $(puttedElementNew).append("<span class=\"reset_c_sep\">&nbsp;|&nbsp;</span><a class=\"set_badges_lc_r\" href=\"#\">Set Ignore Badges</a>");
                      }
                  }
               }
            }
       });
       if (useSameId) {
          var selector = "section.message-user ";
          var selectorOriginal = selector;
          var newSelector = ".message-actionBar.actionBar .actionBar-set.actionBar-set--internal ";
          var lcSelector = ".lc-postActionStart ";
          selector = ".message-attribution .message-attribution-main a";
          $(userItem).on('click', selector + '.ignore_custom_member', function(event) {
             ignoreCustomMember(event, $(this).data("author"));
          });
          $(userItem).on('click', selector + '.hide_xenforo_all_hide', function(event) {
             hideXenforoAllHide(event);
          });
          $(userItem).on('click', selector + '.hide_xenforo_all_show', function(event) {
             hideXenforoAllShow(event);
          });
          $(userItem).on('click', selector + '.reset_custom_member', function(event) {
             resetIgnoreMembers(event);
          });
          $(userItem).on('click', newSelector + '.reset_custom_member', function(event) {
             resetIgnoreMembers(event);
          });
          $(userItem).on('click', lcSelector + '.reset_custom_member', function(event) {
             resetIgnoreMembers(event);
          });
          $(userItem).on('click', selector + '.add_tags', function(event) {
             setTagsEvent(event);
          });
          $(userItem).on('click', newSelector + '.add_tags', function(event) {
             setTagsEvent(event);
          });
          $(userItem).on('click', lcSelector + '.add_tags', function(event) {
             setTagsEvent(event);
          });
          $(userItem).on('click', selector + '.show_tags', function(event) {
             setIgnoreUsers(event);
          });
          $(userItem).on('click', newSelector + '.show_tags', function(event) {
             setIgnoreUsers(event);
          });
          $(userItem).on('click', lcSelector + '.show_tags', function(event) {
             setIgnoreUsers(event);
          });
          $(userItem).on('click', selector + '.reset_tags', function(event) {
             resetIgnoreTags(event);
          });
          $(userItem).on('click', newSelector + '.reset_tags', function(event) {
             resetIgnoreTags(event);
          });
          $(userItem).on('click', lcSelector + '.reset_tags', function(event) {
             resetIgnoreTags(event);
          });
          $(userItem).on('click', selector + '.set_r', function(event) {
             setIgnoreReactions(event);
          });
          $(userItem).on('click', newSelector + '.set_r', function(event) {
             setIgnoreReactions(event);
          });
          $(userItem).on('click', lcSelector + '.set_r', function(event) {
             setIgnoreReactions(event);
          });
          $(userItem).on('click', selector + '.reset_r', function(event) {
             setResetIgnoreReactions(event);
          });
          $(userItem).on('click', newSelector + '.reset_r', function(event) {
             setResetIgnoreReactions(event);
          });
          $(userItem).on('click', lcSelector + '.reset_r', function(event) {
             setResetIgnoreReactions(event);
          });
          $(userItem).on('click', selector + '.set_ranks_lc_r', function(event) {
             setRanksLC(event);
          });
          $(userItem).on('click', newSelector + '.set_ranks_lc_r', function(event) {
             setRanksLC(event);
          });
          $(userItem).on('click', lcSelector + '.set_ranks_lc_r', function(event) {
             setRanksLC(event);
          });
          $(userItem).on('click', selector + '.reset_ranks_lc_r', function(event) {
             resetRanksLC(event);
          });
          $(userItem).on('click', newSelector + '.reset_ranks_lc_r', function(event) {
             resetRanksLC(event);
          });
          $(userItem).on('click', lcSelector + '.reset_ranks_lc_r', function(event) {
             resetRanksLC(event);
          });
          $(userItem).on('click', newSelector + '.set_sig_lc_r', function(event) {
             setSignatureLC(event);
          });
          $(userItem).on('click', lcSelector + '.set_sig_lc_r', function(event) {
             setSignatureLC(event);
          });
          $(userItem).on('click', selector + '.reset_sig_lc_r', function(event) {
             resetSignatureLC(event);
          });
          $(userItem).on('click', newSelector + '.reset_sig_lc_r', function(event) {
             resetSignatureLC(event);
          });
          $(userItem).on('click', lcSelector + '.reset_sig_lc_r', function(event) {
             resetSignatureLC(event);
          });
          $(userItem).on('click', selector + '.set_badges_lc_r', function(event) {
             setBadgesLC(event);
          });
          $(userItem).on('click', newSelector + '.set_badges_lc_r', function(event) {
             setBadgesLC(event);
          });
          $(userItem).on('click', lcSelector + '.set_badges_lc_r', function(event) {
             setBadgesLC(event);
          });
          $(userItem).on('click', selector + '.reset_badges_lc_r', function(event) {
             resetBadgesLC(event);
          });
          $(userItem).on('click', newSelector + '.reset_badges_lc_r', function(event) {
             resetBadgesLC(event);
          });
          $(userItem).on('click', lcSelector + '.reset_badges_lc_r', function(event) {
             resetBadgesLC(event);
          });
          $(userItem).on('click', selector + '.set_devs', function(event) {
             setDevs(event);
          });
          $(userItem).on('click', newSelector + '.set_devs', function(event) {
             setDevs(event);
          });
          $(userItem).on('click', lcSelector + '.set_devs', function(event) {
             setDevs(event);
          });
          $(userItem).on('click', selector + '.reset_devs', function(event) {
             resetDevs(event);
          });
          $(userItem).on('click', newSelector + '.reset_devs', function(event) {
             resetDevs(event);
          });
          $(userItem).on('click', lcSelector + '.reset_devs', function(event) {
             resetDevs(event);
          });
       }
       hideXenforoAll(false);
    });
});
}
}