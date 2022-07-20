"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[226],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,c=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={sidebar_position:9},s="States in the Decompiler",p={unversionedId:"reference/decompiler_states",id:"reference/decompiler_states",title:"States in the Decompiler",description:"How can I tell if a file has states?",source:"@site/documentation/reference/decompiler_states.md",sourceDirName:"reference",slug:"/reference/decompiler_states",permalink:"/docs/reference/decompiler_states",draft:!1,editUrl:"https://github.com/open-goal/open-goal.github.io/tree/master/documentation/reference/decompiler_states.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Process and State",permalink:"/docs/reference/process_and_state"},next:{title:"Usage",permalink:"/docs/category/usage"}},u={},d=[{value:"How can I tell if a file has states?",id:"how-can-i-tell-if-a-file-has-states",level:2},{value:"Virtual vs. Non-Virtual States",id:"virtual-vs-non-virtual-states",level:2},{value:"Decompiling state handers",id:"decompiling-state-handers",level:2},{value:"State Types",id:"state-types",level:2},{value:"Go",id:"go",level:2},{value:"Special Cases for Virtual States",id:"special-cases-for-virtual-states",level:2},{value:"Declaring a virtual state",id:"declaring-a-virtual-state",level:3},{value:"Name of a virtual state",id:"name-of-a-virtual-state",level:3},{value:"Go to a virtual state",id:"go-to-a-virtual-state",level:3},{value:"The return value of <code>event</code> problem.",id:"the-return-value-of-event-problem",level:2},{value:"Unsupported",id:"unsupported",level:2}],m={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"states-in-the-decompiler"},"States in the Decompiler"),(0,r.kt)("h2",{id:"how-can-i-tell-if-a-file-has-states"},"How can I tell if a file has states?"),(0,r.kt)("p",null,"Search in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ir2.asm")," file for ",(0,r.kt)("inlineCode",{parentName:"p"},".type state"),".  If you see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    .type state\nL28:\n    .symbol plat-button-move-downward\n    .symbol #f\n    .symbol #f\n    .symbol #f\n")),(0,r.kt)("p",null,"that's a state, and you can expect the file to have ",(0,r.kt)("inlineCode",{parentName:"p"},"defstate"),"s."),(0,r.kt)("h2",{id:"virtual-vs-non-virtual-states"},"Virtual vs. Non-Virtual States"),(0,r.kt)("p",null,"A non-virtual state is stored in a global variable with the same name as the state.  This is just like a global function.  You don't have to do anything special with this - the decompiler will insert a ",(0,r.kt)("inlineCode",{parentName:"p"},"defstate")," with the appropriate name and make sure that the name of the symbol and the name stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," itself match."),(0,r.kt)("p",null,"A virtual state is stored in the method table of a type, similar to a method.  When doing a ",(0,r.kt)("inlineCode",{parentName:"p"},"go"),", the virtual state will be looked up from the method table of the current process, allowing a child type of process to override the state of its parent.  You can tell if a state is virtual by looking for a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"inherit-state")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"method-set!"),"."),(0,r.kt)("h2",{id:"decompiling-state-handers"},"Decompiling state handers"),(0,r.kt)("p",null,"Each state has up to 6 handler functions: ",(0,r.kt)("inlineCode",{parentName:"p"},"enter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"exit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"trans"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),". In order for the decompiler to recognize these, you ",(0,r.kt)("em",{parentName:"p"},"must")," have the top-level function decompile. Do not attempt to decompile these functions until the top-level function passes."),(0,r.kt)("p",null,"The top-level analysis will find state handlers and name them appropriately.  For non-virtual states, they will be named like ",(0,r.kt)("inlineCode",{parentName:"p"},"(<handler-name> <state-name>)"),". Like ",(0,r.kt)("inlineCode",{parentName:"p"},"(code teetertotter-launch)"),". For virtual states, the name will be ",(0,r.kt)("inlineCode",{parentName:"p"},"(<handler-name> <state-name> <type-name>)"),".  Use these names in type casts, stack structures, etc. These names will not work unless the top-level has been decompiled."),(0,r.kt)("p",null,"The type of the state handlers will be set up automatically by the type system, but requires that you get the type of the state itself correct."),(0,r.kt)("p",null,"Note: inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"find_defstates.cpp")," there is an option to enable rename prints that will print out the old name of the function before the rename."),(0,r.kt)("h2",{id:"state-types"},"State Types"),(0,r.kt)("p",null,"Each state object must have its type set.  The type of a state is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(state <arg0> <arg1> ... <parent-type>)\n")),(0,r.kt)("p",null,"The args are the arguments given to the enter/code function. Both enter and code get the same arguments, and some may be unused, but this is ok."),(0,r.kt)("p",null,"The parent type is the type that the state belongs to.  It must be ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," or a child of ",(0,r.kt)("inlineCode",{parentName:"p"},"process"),".  All state handlers are automatically behaviors of this type."),(0,r.kt)("p",null,"Here are two examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(define-extern silostep-rise (state symbol silostep))\n")),(0,r.kt)("p",null,"will make all the ",(0,r.kt)("inlineCode",{parentName:"p"},"silostep-rise")," handlers a behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"silostep")," and will make ",(0,r.kt)("inlineCode",{parentName:"p"},"enter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," take a single ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol")," argument."),(0,r.kt)("h2",{id:"go"},"Go"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," macro changes state. Internally it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"enter-state"),".  Do not insert casts for ",(0,r.kt)("inlineCode",{parentName:"p"},"go"),", it should work automatically."),(0,r.kt)("p",null,"TODO: there may be issues with the decompiler casting arguments to ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," - this is a bit tricky and I couldn't find a test case yet."),(0,r.kt)("h2",{id:"special-cases-for-virtual-states"},"Special Cases for Virtual States"),(0,r.kt)("p",null,"There are a few special cases for virtual states."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The state must be declared in the ",(0,r.kt)("inlineCode",{parentName:"li"},"deftype"),", within the list of methods."),(0,r.kt)("li",{parentName:"ol"},"The name of the method must be correct."),(0,r.kt)("li",{parentName:"ol"},"Any ",(0,r.kt)("inlineCode",{parentName:"li"},"go")," should be in a behavior of the appropriate process.")),(0,r.kt)("p",null,"The next three sections explain these in more detail"),(0,r.kt)("h3",{id:"declaring-a-virtual-state"},"Declaring a virtual state"),(0,r.kt)("p",null,"Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"define-extern")," to declare a virtual state.  Instead, use the method list in the ",(0,r.kt)("inlineCode",{parentName:"p"},"deftype"),"."),(0,r.kt)("p",null,"As an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    lui v1, L30               ;; [ 25] (set! gp-0 L30) [] -> [gp: state ]\n    ori gp, v1, L30\n    lw t9, inherit-state(s7)\n    or a0, gp, r0\n    lw v1, plat-button(s7)\n    lwu a1, 104(v1)\n    jalr ra, t9\n    sll v0, ra, 0\n\n    lw t9, method-set!(s7)\n    lw a0, sunken-elevator(s7)\n    addiu a1, r0, 22\n    or a2, gp, r0\n    jalr ra, t9\n")),(0,r.kt)("p",null,"This means"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The state object is ",(0,r.kt)("inlineCode",{parentName:"li"},"L30"),"."),(0,r.kt)("li",{parentName:"ul"},"The state is for type ",(0,r.kt)("inlineCode",{parentName:"li"},"sunken-elevator"),"."),(0,r.kt)("li",{parentName:"ul"},"The parent type of ",(0,r.kt)("inlineCode",{parentName:"li"},"sunken-elevator")," should be ",(0,r.kt)("inlineCode",{parentName:"li"},"plat-button")),(0,r.kt)("li",{parentName:"ul"},"The method ID is 22.")),(0,r.kt)("p",null,"The correct declaration should go under ",(0,r.kt)("inlineCode",{parentName:"p"},":methods"),". Like a normal method, it only needs to be defined in the parent type that first defines it. So we only have to put it in ",(0,r.kt)("inlineCode",{parentName:"p"},"plat-button")," and can leave it out of ",(0,r.kt)("inlineCode",{parentName:"p"},"sunken-elevator"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(plat-button-pressed () _type_ :state 22)\n")),(0,r.kt)("p",null,"The first thing is the state name (described more in the next section).  The next thing is a list of argument types given to the ",(0,r.kt)("inlineCode",{parentName:"p"},"enter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," functions."),(0,r.kt)("p",null,"The ID should match the ID given to ",(0,r.kt)("inlineCode",{parentName:"p"},"method-set!")," and it will be checked just like the normal method IDs."),(0,r.kt)("p",null,"If you get this wrong, you will get an error message like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"virtual defstate attempted on something that isn't a state: (the-as state (method-of-type plat-button plat-button-move-upward))\nDid you forget to put :state in the method declaration?\n")),(0,r.kt)("p",null,"which means that the ",(0,r.kt)("inlineCode",{parentName:"p"},"plat-button-move-upward")," entry in ",(0,r.kt)("inlineCode",{parentName:"p"},":methods")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"(deftype plat-button")," is missing the ",(0,r.kt)("inlineCode",{parentName:"p"},":state")),(0,r.kt)("h3",{id:"name-of-a-virtual-state"},"Name of a virtual state"),(0,r.kt)("p",null,"The decompiler will check that the name in the method is correct.  If you get it wrong, there will be an error that tells you the right name."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Disagreement between state name and type system name. The state is named plat-button-move-upward, but the slot is named dummy-24, defined in type plat-button\n")),(0,r.kt)("p",null,"This means you should rename ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy-24")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"plat-button")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"plat-button-move-upward"),"."),(0,r.kt)("h3",{id:"go-to-a-virtual-state"},"Go to a virtual state"),(0,r.kt)("p",null,"You must be in a behavior in order for ",(0,r.kt)("inlineCode",{parentName:"p"},"go-virtual")," to decompile successfully."),(0,r.kt)("h2",{id:"the-return-value-of-event-problem"},"The return value of ",(0,r.kt)("inlineCode",{parentName:"h2"},"event")," problem."),(0,r.kt)("p",null,"There is one place that seems to rely on the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),". As a result, the default is to assume that ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),". However, there are sometimes ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," functions that clearly don't return a value and will refuse to decompile.  The recommendation is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try to make all ",(0,r.kt)("inlineCode",{parentName:"li"},"event")," functions return a value."),(0,r.kt)("li",{parentName:"ul"},"If it is absolutely not possible, make the function type return ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),", then the defstate should automatically insert a cast.")),(0,r.kt)("h2",{id:"unsupported"},"Unsupported"),(0,r.kt)("p",null,"Calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"find-parent-method")," that actually return a ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," will have type ",(0,r.kt)("inlineCode",{parentName:"p"},"function"),". You must manually cast it. Make sure you get the argument types correct. This same problem exists for finding methods, but it has been very rare. If needed we can add special support in the decompiler/compiler to make this work."),(0,r.kt)("p",null,"If there is a function with multiple virtual ",(0,r.kt)("inlineCode",{parentName:"p"},"go"),"s which assume a different type at compile-time (accessing different parts of the type tree), then it is not possible to insert the right kind of cast yet."))}h.isMDXComponent=!0}}]);