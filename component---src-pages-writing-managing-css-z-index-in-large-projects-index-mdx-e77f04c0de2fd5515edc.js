(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{XVuu:function(e,t,n){"use strict";var a=n("rePB"),o=n("q1tI"),i=n.n(o),s=n("DGZL");n("zFpA");var r=function(e){var t=e.date,n=e.formattedDate;return i.a.createElement("div",{className:"article-meta fontSize--0"},i.a.createElement("time",{dateTime:t},n))},l=n("d7D3");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,o=n.humanDate,c={marginLeft:"calc(var(--space-half) * -1)"};return i.a.createElement(l.a,null,i.a.createElement(s.a,{title:a.title,description:a.description||a.synopsis,canonical:a.canonical,isArticle:!0}),i.a.createElement("div",{style:d(d({},c),{},{overflow:"hidden"})},i.a.createElement("p",{className:"color--display fontWeight--bold fontSize--4",style:{opacity:.25,transform:"translate(-0.15em)"},role:"presentation"},"stevenfrieson.com")),i.a.createElement("div",{style:c},i.a.createElement(r,{date:a.date,formattedDate:o})),t)}},d7D3:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("GJp5"),s=n("NCtY"),r=n("5vWv"),l=n("y9MN"),c=n("SMRE");n("OmL/");t.a=function(e){var t=e.children;return Object(c.a)(),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.b,null),o.a.createElement(i.a,null),o.a.createElement("div",{className:"display--flex"},o.a.createElement("div",{className:"main__column left-margin"}),o.a.createElement("div",{className:"main__layout display--flex"},o.a.createElement("aside",{className:"main__column links padding--x--half"},o.a.createElement("div",{className:"display--grid aside"},o.a.createElement(r.a,null),o.a.createElement("div",null,o.a.createElement(l.a,null)))),o.a.createElement(s.a,{className:"main main__column padding--x--half"},t))))}},kBm3:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("XVuu"),s={},r={_frontmatter:s},l=i.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(l,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Managing CSS Z-Index in Large Projects"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This article was written for ",Object(o.b)("a",{parentName:"em",href:"https://www.smashingmagazine.com"},"Smashing Magazine"),". You can ",Object(o.b)("a",{parentName:"em",href:"https://www.smashingmagazine.com/2021/02/css-z-index-large-projects/"},"read the original there"),".")),Object(o.b)("p",null,"There are several articles that explain z-index (",Object(o.b)("a",{parentName:"p",href:"https://philipwalton.com/articles/what-no-one-told-you-about-z-index/"},"here’s a good one"),"), since it continues to trip up developers of all experience levels. I do not think that the number of articles is a sign that none of them do a good job at explaining it, but that there are a lot of developers out there and just because one developer read and understood the article doesn't necessarily mean that everyone on their team read and understands it now. While taking the time to better understand how z-index (or any piece of technology) works will definitely set you up to work with it better, we can also take another approach: make it easier to work with z-index."),Object(o.b)("p",null,"We use abstractions and conventions to hide away the tricky and error-prone parts, which in turn makes it easier for everyone who needs to do the same task. I had the opportunity to attempt to make z-index easier to work with for my team while working on a redesign of our company's website. The system I designed allowed my team to implement the entire UI while never having to question what a certain z-index value was used for, what number to use when adding a new z-index declaration, or how to fix stacking bugs that crept into the system."),Object(o.b)("h2",null,"Common solution"),Object(o.b)("p",null,"The most common system I've seen for managing z-index values–other than no system–is setting several general-use values, each separated by an arbitrary number. This solution definitely tames z-index issues, but as I've worked on teams that use this system there still seems to be confusion about how to use it properly. Here is an example from ",Object(o.b)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.0/layout/z-index/"},"the Bootstrap documentation"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scss"},"$zindex-dropdown:       1000;\n$zindex-sticky:         1020;\n$zindex-fixed:          1030;\n$zindex-modal-backdrop: 1040;\n$zindex-modal:          1050;\n$zindex-popover:        1060;\n$zindex-tooltip:        1070;\n")),Object(o.b)("p",null,"Bootstrap defines z-index values in Sass variables like ",Object(o.b)("inlineCode",{parentName:"p"},"$zindex-dropdown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"$zindex-sticky"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"$zindex-fixed"),". Those names seem pretty straight forward, but when a developer goes to choose a value for a feature they're working on, there could be confusion as to which value is most appropriate for their use. They end up asking, \"Is what I'm implementing a 'dropdown' or a 'popover'?\" which can easily be debated and may not have a clear answer."),Object(o.b)("p",null,'A second issue I see with this solution is that the actual values for the variables might seem confusing or lead to insecurity. This solution leaves space in between each value to give developer space to add their own values in between if necessary. Bootstrap defines seven values separated by increments of 10, starting at 1000 and ending at 1070. Many questions could come to mind when reading this. "Why start at 1000? Is there anything less than 1000?" "Where is 1010? Is it a bug? Is something else using it?" "Why was 10 chosen? What if I need more than 9 values to go in between?" Though I\'ve never actually needed these "what if" questions answered, they can add  insecurity and confusion to a system that already seems magical and misunderstood. Can we remove all of these concerns, allowing the developer to easily and accurately choose the z-index value they need?'),Object(o.b)("h2",null,"A New Solution"),Object(o.b)("p",null,"Since working on a redesign gave my team a fresh start, this was one common issue we wanted to see if we could avoid. To align with our general coding standards, my goals for managing z-index was to avoid ",Object(o.b)("a",{parentName:"p",href:"https://archive.org/details/cleancodehandboo00mart_843/page/n330/mode/2up"},"magic numbers")," and to make it easier for every team member to confidently contribute. The second goal of making it easier for others is vague, so I focused on trying to solve these common issues:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"people often choose arbitrarily large z-index values"),Object(o.b)("li",{parentName:"ul"},"z-index bug fixes often result in a new z-index bug"),Object(o.b)("li",{parentName:"ul"},"the relationship between z-index values is difficult to trace")),Object(o.b)("p",null,"Let's look at solutions for each of these issues that I was able to apply, leaning on conventions and using existing technologies."),Object(o.b)("h3",null,"Giving Z-Index Values Semantics"),Object(o.b)("p",null,"One reason people often choose arbitrarily large z-index values is because they don't know the z-index value of the item above which they are trying to place a new item.  Once they find an arbitrarily high value that works, they leave it instead of finding an optimal value. Later on, when someone finds this value they have no idea why it is what it is, and even the original author may have forgotten."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"z-index: 9999;\n")),Object(o.b)("p",null,'The solution for fixing "magic numbers" like this is by using a named constant instead. While, naming the value alone does not give us much more value than the class name does, when we put our z-index constants together, their relationship starts to become explicit.'),Object(o.b)("p",null,"To remove the magic numbers, I first started defining all of our z-index values in a JavaScript file. I used a JavaScript file since our application was using a CSS-in-JS solution, though this and the ideas in this article can be implemented with styling preprocessors like Sass variables as well as in CSS using custom properties."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"export const backdrop = 0;\nexport const openButton = 1;\nexport const dropdown = 2;\n")),Object(o.b)("p",null,"With z-index constants, the css value has little more meaning, and the actual value is obscured away."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"css`\n  z-index: ${backdrop};\n`;\n")),Object(o.b)("p",null,"This also makes the original value easy to find, revealing the related constants, but there is a further improvement that can be made. We know by how z-index works that these values are related to each other, so we can change our constants to make that more apparent."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"export const backdrop = 0;\nexport const openButton = backdrop + 1;\nexport const dropdown = openButton + 1;\n")),Object(o.b)("p",null,"Using simple arithmetic, we can use the previous constants to make the next constant. Taking this idea one step further to further eliminate ambiguity, I added some utility constants to make these definitions read more like a sentence."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const base = 0;\nconst above = 1;\n\nexport const backdrop = base;\nexport const openButton = above + backdrop;\nexport const dropdown = above + openButton;\n")),Object(o.b)("p",null,"Now when someone sees a line like ",Object(o.b)("inlineCode",{parentName:"p"},"z-index: ${dropdown};")," they can look find the dropdown's definition and read, \"The ",Object(o.b)("strong",{parentName:"p"},"dropdown")," is ",Object(o.b)("strong",{parentName:"p"},"above")," the ",Object(o.b)("strong",{parentName:"p"},"open button"),'."'),Object(o.b)("p",null,"This makes future maintenance of the constants easier. Whenever you have a new value to add, you can be confident that you are adding it into the right place."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"export const backdrop = base;\nexport const openButton = above + backdrop;\nexport const dropdown = above + openButton;\nexport const closeButton = above + dropdown; // new\n")),Object(o.b)("p",null,"Deleting values is easy too, but you need to remember to update any other values that are dependent on it. Using JavaScript, the linter highlighted this for me."),Object(o.b)("p",null,'Stacking bug tickets often show up that say something like, "the dropdown is overlapping with the button when it should be underneath." When coming across these, the fix is as simple as swapping the relationship pointers in the definitions.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"export const backdrop = base;\nexport const dropdown = above + backdrop;\nexport const openButton = above + dropdown;\nexport const closeButton = above + dropdown; // ???\n")),Object(o.b)("p",null,"Now that we've swapped the z-index order, we notice another potential bug before we even check the browser. The close button might now conflict with the open button. You can now have the necessary conversations to resolve bugs ",Object(o.b)("em",{parentName:"p"},"before")," anyone sees a problem in production."),Object(o.b)("p",null,"One extra piece I found to be helpful in rare situations was a utility for placing items ",Object(o.b)("inlineCode",{parentName:"p"},"below")," others. To avoid mixing ",Object(o.b)("inlineCode",{parentName:"p"},"above")," and ",Object(o.b)("inlineCode",{parentName:"p"},"below"),", I made the rule that ",Object(o.b)("inlineCode",{parentName:"p"},"below")," should only be used for negative values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const base = 0;\nconst above = 1;\nconst below = -1;\n\nexport const backdrop = below + dropdown;\nexport const dropdown = below + button;\nexport const button = base;\n")),Object(o.b)("p",null,"Something interesting about this system is that every value is only as high as it needs to be, while you don't even know what values are, leaving less to be concerned about. Also, you can delete and add values knowing with confidence how it will affect the other stacked elements."),Object(o.b)("p",null,"Once our application ended up with a dozen or so z-index constants, though it started to become a little bit confusing having a long flat list."),Object(o.b)("h3",null,"Organizing by Stacking Context"),Object(o.b)("p",null,"When thinking about stacking context and how the values of each stacking context are independent from others, it sounded like other front-end solutions for effective scoping. I drew similarities to other JavaScript modules, components, ",Object(o.b)("a",{parentName:"p",href:"https://bradfrost.com/blog/post/atomic-web-design/"},"atomic design"),", and ",Object(o.b)("a",{parentName:"p",href:"http://getbem.com/introduction/"},"BEM"),". They are all trying to solve similar problems of how we can independently scope concerns, keeping them from affecting other areas."),Object(o.b)("p",null,"Taking inspiration from BEM, I made a naming convention for our constants to better organize the values and bring more order to the flat list of constants. The format I ended up using had a template like this: ",Object(o.b)("inlineCode",{parentName:"p"},"z<Context><Element>"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"z")," portion is a prefix denoting the fact that the value is meant to be used in z-index declarations, considering we had other constants defined in our JavaScript files like color variables."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<Context>"),' portion is replaced with the name stacking context the constant belongs to. This is similar to the "block" in BEM and in practice almost always shares the same name as the component being styled. The main exception is the root HTML stacking context that is used for page region stacking.'),Object(o.b)("p",null,"The final portion of the format, ",Object(o.b)("inlineCode",{parentName:"p"},"<Element>"),' is for the name of the specific item to be positioned in the stacking context and is most similar to "element" in BEM.'),Object(o.b)("p",null,"Here is a full example of what this naming convention could like added to what we've talked about previously. For an interactive version, you can ",Object(o.b)("a",{parentName:"p",href:"https://codepen.io/sfrieson/pen/oNzapRJ?editors=0010"},"play around with the same example in a CodePen"),". For other language versions, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/sfrieson/managing-css-z-index-in-large-projects"},"check out this repository"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// Utils\nconst base = 0;\nconst above = 1; // use this for all values above the base\nconst below = -1; // and this for all values below the base\n\n// Page Layout\nexport const zLayoutNavigation = above + base;\nexport const zLayoutFooter = above + base;\nexport const zLayoutModal = above + zLayoutNavigation;\nexport const zLayoutPopUpAd = above + zLayoutModal;\n\n// NavMenu\nexport const zNavMenuBackdrop = below + base;\nexport const zNavMenuPopover = above + base;\nexport const zNavMenuToggle = above + zNavMenuPopover;\n")),Object(o.b)("p",null,"Now that our constants are organized by their stacking context, we can quickly see which values are related and where a new value or fix should go."),Object(o.b)("h3",null,"Taking It Further"),Object(o.b)("p",null,"That is essentially the specification of how this should work. Considering this solution was only designed with one application in mind, there are some further steps that could be taken to make it more mature and support more use cases. Some of these ideas are more specific to the language it’s being implemented in but most ideas carry over."),Object(o.b)("p",null,"One area that could possibly be improved around what is being shipped to the browser. When I implemented this, the framework we were using did not give us much control over the build tools, so the JavaScript file of all the definitions was bundled with the application. This did not have a measurable performance impact for our application, but you may have noticed that all of the values could be computed at compile time. An implementation using Sass would end up not shipping any of the Sass variables to the client, instead inserting the derived z-index value in the CSS. For JS and CSS solutions, build tools like Webpack and PostCSS, respectively, could help do the same."),Object(o.b)("p",null,"The way the solution evolved as I worked on it, the z-index constants ended up all in one file. This ended up being a great way to see all of the z-index values across the application at once, making it easier to quickly glance for any possible stacking conflicts. They were also filed away with other styling constants like colors and typography, so it made sense to originally have them all defined together. As the file grew though, it started to be internally organized by stacking context as explained above. Since the stacking contexts often mapped to a component, it started feeling like each set of constants could be collocated with their component. This would bring all the normal benefits of collocation, being closer to the files they’re used in, causing less friction when needing to add, edit, and remove constants. We never refactored it, but that seems like a viable option to explore."),Object(o.b)("p",null,"One additional piece has to do with ergonomics and developer experience. The constants are all exported as a flat list at the moment. The naming convention took inspiration from BEM, but Sass and JavaScript allow us to use other ways to organize our data. Sass maps or JavaScript Objects or Maps could have been used to organize the values hierarchically. If we had all the values in a ",Object(o.b)("inlineCode",{parentName:"p"},"z")," object, it could have led to shorter import statements. We could have gone further to have an object per stacking context as well leading to a usage style more like ",Object(o.b)("inlineCode",{parentName:"p"},"z.layout.navigation"),". Different tools like TypeScript could guard against making typos here, though this might be more effort than it’s worth."),Object(o.b)("h2",null,"Our Results"),Object(o.b)("p",null,"The system as spelled out was successfully implemented and deployed to our production applications.  Checking back in on the objectives, we definitely got rid of the magic numbers. As far as developer ease and confidence goes, my team was able to easily add new z-index values and fix pre- and post-launch bugs without fear that the changes would introduce new bugs. On multiple occasions we fixed bugs before they were filed."),Object(o.b)("p",null,"We also were able to avoid the issue of coming across a random ",Object(o.b)("inlineCode",{parentName:"p"},"z-index: 9999;"),". Though the application had sticky headers, floating action buttons, dropdowns, modals, pop up ads, and more in the stacking context, the highest value we had was 5.  Even then, no one knew it since the values were all abstracted away from us in variables."),Object(o.b)("p",null,"Solving for these developer experience goals resulted in a mini-framework, which seems like a good outcome considering frameworks aim to help people to make the correct decision with less effort and move more quickly."),Object(o.b)("p",null,"Something else we noticed was that sometimes we were assigning a z-index when we did not necessarily need one. Since stacking contexts can be created by several different properties, declarations like ",Object(o.b)("inlineCode",{parentName:"p"},"position: sticky;")," can act in a similar manner as setting ",Object(o.b)("inlineCode",{parentName:"p"},"z-index: 1;"),". In those cases, we continued to add a constant and declaration anyway. Keeping them allowed for better consistency in the system instead of allowing there to be special cases, which would degrade confidence about whether everything was working correctly or not. Keeping the constant list complete aided in understanding the system and set us up better for rearranging the values when necessary."),Object(o.b)("h3",null,"What It Doesn't Solve"),Object(o.b)("p",null,"Like any framework there are parts that it doesn't not do a good job at solving for you. Naming things is still hard, and this framework slightly exacerbates the problem by requiring that you name all of your z-index values. Even still, we found that the gained clarity overcame the chore having to name them all."),Object(o.b)("p",null,"This system also does not necessarily help you figure out which stacking context a bug is in. Coming across a z-index bug where you don't know where the new stacking context is created or where the z-index value is set is not solved by this framework, but once you have found the issue, the path to making the correct fix is clear."),Object(o.b)("h2",null,"Using it in your app"),Object(o.b)("p",null,"The ideas shared here should be actionable in most applications depending on your styling solution and browser support. Migrating to use this system is not very risky since stacking contexts are already scoped individually; you can migrate one context as it already exists at a time. Changing to use these conventions forces you to describe more clearly what you already have in your app, shining a light on what might currently seem like a dark, scary corner."),Object(o.b)("p",null,"If your z-index values are in a state where you are unsure about most or all of them, then the best way to convert to this system will probably be to start by moving creating a constant for each value in a single list in a single file. As the stacking contexts become more clear you can start grouping them renaming them if necessary to conform to the naming convention."),Object(o.b)("p",null,"My team was not working with any external CSS libraries or frameworks that included z-index values, but that could possibly add some difficulty to adopting this system. Hopefully, the utilities are configurable enough to deal with most uses and to even incorporate the third-party values into the system."),Object(o.b)("p",null,"Finally, all of the examples here have been written as a single file of z-index values, but you could collocate these values with the component to make an even stronger connection between the two. Using a file naming convention will make it easier to find all of the values throughout the application."),Object(o.b)("h3",null,"Try it out yourself"),Object(o.b)("p",null,"If you are having trouble wrangling z-index values on your site and end up trying out these suggestions, I would love to hear about your experience. This mini-framework was developed over just a few months and has only been used in one production codebase, so there are certainly unexplored use cases and opinions that could be added or tweaked."))}c.isMDXComponent=!0},zFpA:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-writing-managing-css-z-index-in-large-projects-index-mdx-e77f04c0de2fd5515edc.js.map