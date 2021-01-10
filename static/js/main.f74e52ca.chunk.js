(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{21:function(e,t,A){},44:function(e,t,A){},67:function(e,t,A){"use strict";A.r(t);var n=A(0),a=A(1),l=A.n(a),s=A(31),i=A.n(s),r=(A(39),A(40),A(43),A(44),A(8)),c=A(9),o=A(11),u=A(10),d=(A(21),A(14)),g=function(e){Object(o.a)(A,e);var t=Object(u.a)(A);function A(e){var n;return Object(r.a)(this,A),(n=t.call(this,e)).state={},n}return Object(c.a)(A,[{key:"render",value:function(){return Object(n.jsx)(l.a.Fragment,{children:Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsxs)("h3",{style:{color:"blue",marginBottom:"50px"},children:["Welcome to the World of Mini Games! ",Object(n.jsx)("br",{})," Choose a Game you would like to play!",Object(n.jsx)("br",{}),"Have Fun!!"]}),Object(n.jsx)(d.b,{style:{color:"white"},to:"/gameList",children:Object(n.jsx)("button",{className:"btn btn-primary btn-large",children:"Explore Games Library"})})]})})}}]),A}(l.a.Component),b=A(2),h=A(19),j=A.p+"static/media/loading.ab6cafe8.gif",B=function(e){Object(o.a)(A,e);var t=Object(u.a)(A);function A(e){var n;return Object(r.a)(this,A),(n=t.call(this,e)).resetSquares=function(){n.props.resetSquares()},n.state={},n}return Object(c.a)(A,[{key:"render",value:function(){return Object(n.jsx)("div",{style:{textAlign:"center"},className:"modal fade",id:"winnerModal",tabIndex:"-1",role:"dialog","aria-labelledby":"winnerModalLabel","aria-hidden":"true",children:Object(n.jsx)("div",{className:"modal-dialog",role:"document",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h5",{className:"modal-title",id:"winnerModalLabel",children:"Yeay! Game Completed!"}),Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(n.jsx)("div",{className:"modal-body",children:this.props.isTie?"soooo Close! It's a Tie!!! Keep Playing to Find a Winner!":"The Winner is "+this.props.winner+". Keep Playing!!!"}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:this.resetSquares,children:"OK"})})]})})})}}]),A}(l.a.Component),m=function(e){Object(o.a)(A,e);var t=Object(u.a)(A);function A(e){var n;return Object(r.a)(this,A),(n=t.call(this,e)).resetSquares=function(){setTimeout((function(){n.setState({squareValues:Array(9).fill(null),currentPlayer:"O",prevValue:Array(9).fill(null),winner:null,isLoading:!1,isTie:!1})}),200)},n.clickSquare=function(e){n.setState({isLoading:!0});var t=Object(h.a)(n.state.prevValue),A=Object(h.a)(n.state.squareValues);null!==A[e]&&A[e]!==n.state.currentPlayer?alert("This Move is Not Allowed"):null!==A[e]&&A[e]===n.state.currentPlayer?A[e]!==t[e]?(t[e]=null,n.updateValue(t)):alert("This Move is Not Allowed"):(t[e]=n.state.currentPlayer,n.updateValue(t))},n.nextPlayer=function(){JSON.stringify(n.state.prevValue)===JSON.stringify(n.state.squareValues)?alert("Please complete your move before giving the turn to Next Player"):n.setState({currentPlayer:"O"===n.state.currentPlayer?"X":"O",prevValue:n.state.squareValues})},n.checkStatus=function(){var e=!1,t=null,A=!1,a=n.state.squareValues;null!==a[0]&&null!==a[1]&&null!==a[2]&&a[0]===a[1]&&a[1]===a[2]?(e=!0,t=a[0]):null!==a[3]&&null!==a[4]&&null!==a[5]&&a[3]===a[4]&&a[4]===a[5]?(e=!0,t=a[3]):null!==a[6]&&null!==a[7]&&null!==a[8]&&a[6]===a[7]&&a[7]===a[8]?(e=!0,t=a[6]):null!==a[0]&&null!==a[3]&&null!==a[6]&&a[0]===a[3]&&a[3]===a[6]?(e=!0,t=a[0]):null!==a[1]&&null!==a[4]&&null!==a[7]&&a[1]===a[4]&&a[4]===a[7]?(e=!0,t=a[1]):null!==a[2]&&null!==a[5]&&null!==a[8]&&a[2]===a[5]&&a[5]===a[8]?(e=!0,t=a[2]):null!==a[0]&&null!==a[4]&&null!==a[8]&&a[0]===a[4]&&a[4]===a[8]?(e=!0,t=a[0]):null!==a[2]&&null!==a[4]&&null!==a[6]&&a[2]===a[4]&&a[4]===a[6]?(e=!0,t=a[2]):null!==a[0]&&null!==a[1]&&null!==a[2]&&null!==a[3]&&null!==a[4]&&null!==a[5]&&null!==a[6]&&null!==a[7]&&null!==a[8]&&(e=!0,A=!0),e&&n.setState({winner:t,isTie:A,isLoading:!1},(function(){document.getElementById("winnerModalButton").click()})),n.setState({isLoading:!1})},n.state={squareValues:Array(9).fill(null),currentPlayer:"O",prevValue:Array(9).fill(null),winner:null,isLoading:!1,isTie:!1},n}return Object(c.a)(A,[{key:"updateValue",value:function(e){this.setState({squareValues:e},this.checkStatus)}},{key:"render",value:function(){var e=this;return Object(n.jsx)(l.a.Fragment,{children:this.state.isLoading?Object(n.jsx)("img",{className:"loadingGif",src:j,alt:"loading gif"}):Object(n.jsxs)("div",{className:"outer-container",children:[Object(n.jsx)("h2",{className:"heading",children:"Tic Tac Toe"}),Object(n.jsxs)("h3",{style:{textAlign:"center",marginBottom:"20px",marginLeft:"-25px"},children:["Current Player: ",this.state.currentPlayer]}),Object(n.jsx)("div",{className:"board",children:this.state.squareValues.map((function(t,A){return Object(n.jsx)("div",{className:"square",onClick:function(t){e.clickSquare(A)},children:Object(n.jsx)("div",{className:"innerSquare",children:t})},A)}))}),Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsxs)("button",{className:"btn btn-primary",style:{marginRight:"250px"},onClick:this.nextPlayer,children:["Pass to Player ","O"===this.state.currentPlayer?" X":" O"]}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:this.resetSquares,children:"Reset"})]}),Object(n.jsx)("button",{id:"winnerModalButton",hidden:!0,type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#winnerModal"}),Object(n.jsx)(B,{winner:this.state.winner,isTie:this.state.isTie,resetSquares:this.resetSquares})]})})}}]),A}(l.a.Component),y=A(33),O=A.n(y),f=function(e){Object(o.a)(A,e);var t=Object(u.a)(A);function A(e){var n;return Object(r.a)(this,A),(n=t.call(this,e)).selectGame=function(e){"/ticTacToe"===e.url?n.setState({url:e.url,buttonText:"Proceed to Play",rules:"i) The game is played on a grid that's 3 squares by 3 squares. ii) You are O, your friend is X. Players take turns putting their marks in empty squares. iii) The first player to get 3 of his/her marks in a row (up, down, across, or diagonally) is the winner. iv) When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie."},(function(){document.getElementById("rulesModalButton").click()})):n.setState({url:e.url,buttonText:"Go to Dashboard",rules:"The Game is not yet Released. Kindly check the other Games. Sorry for the inconvenience!"},(function(){document.getElementById("rulesModalButton").click()}))},n.gameAction=function(){"/comingSoon"===n.state.url?n.props.history.push("/"):n.props.history.push("/ticTacToe")},n.state={gameList:[],rules:"",url:"",buttonText:"OK"},n}return Object(c.a)(A,[{key:"componentDidMount",value:function(){var e=this;O.a.get("./miniGames.json").then((function(t){e.setState({gameList:t.data})})).catch((function(e){console.log("error details",e)}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(l.a.Fragment,{children:[Object(n.jsx)("div",{style:{textAlign:"center",marginTop:"50px"},children:Object(n.jsx)("table",{className:"table",children:Object(n.jsx)("tbody",{children:this.state.gameList.map((function(t,A){return Object(n.jsx)("tr",{children:Object(n.jsx)("td",{style:{cursor:"pointer",color:"blue"},onClick:function(){e.selectGame(t)},children:t.name})},A)}))})})}),Object(n.jsx)("button",{id:"rulesModalButton",hidden:!0,type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#rulesModal"}),Object(n.jsx)("div",{style:{textAlign:"center"},className:"modal fade",id:"rulesModal",tabIndex:"-1",role:"dialog","aria-labelledby":"rulesModalLabel","aria-hidden":"true",children:Object(n.jsx)("div",{className:"modal-dialog",role:"document",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h5",{className:"modal-title",id:"rulesModalLabel",children:"Game Information"}),Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(n.jsx)("div",{className:"modal-body",children:this.state.rules}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:this.gameAction,children:this.state.buttonText})})]})})})]})}}]),A}(l.a.Component);var w=function(){return Object(n.jsx)(l.a.Fragment,{children:Object(n.jsx)("div",{style:{textAlign:"center",margin:"10% 0"},children:Object(n.jsx)("h3",{style:{color:"blue"},children:"Requested Page Not Found! Please Click the Home icon to go to Dashboard!"})})})},C=function(e){Object(o.a)(A,e);var t=Object(u.a)(A);function A(e){var n;return Object(r.a)(this,A),(n=t.call(this,e)).state={},n}return Object(c.a)(A,[{key:"render",value:function(){return Object(n.jsx)(l.a.Fragment,{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)("div",{children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",component:g}),Object(n.jsx)(b.a,{path:"/ticTacToe",component:m}),Object(n.jsx)(b.a,{path:"/gameList",component:f}),Object(n.jsx)(b.a,{component:w})]})}),Object(n.jsx)(d.b,{title:"Go to Dashboard",to:"/",children:Object(n.jsx)("img",{className:"homeButton",alt:"home icon",src:"data:image/png;base64,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"})})]})})}}]),A}(l.a.Component),v=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,68)).then((function(t){var A=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,s=t.getTTFB;A(e),n(e),a(e),l(e),s(e)}))};i.a.render(Object(n.jsx)(C,{}),document.getElementById("root")),v()}},[[67,1,2]]]);
//# sourceMappingURL=main.f74e52ca.chunk.js.map