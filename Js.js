const container = document.querySelector('.counter');
const buttonsDiv = document.querySelector('.buttons');
const secInput = document.getElementById('seconds');
const Pausepanel = document.getElementById('pausepanel');
const TimeUpPanel = document.getElementById('timeuppanel');
var NumberOfMoves = document.getElementById('Moves');


var disk1 = document.getElementById('disk1');
var disk2 = document.getElementById('disk2');
var disk3 = document.getElementById('disk3');
var disk4 = document.getElementById('disk4');
var disk5 = document.getElementById('disk5');
var disk6 = document.getElementById('disk6');
var disk7 = document.getElementById('disk7');
var disk8 = document.getElementById('disk8');
var disk9 = document.getElementById('disk9');


var CurrentDisks = 3;

var box1 = document.getElementById("dabbaa1");
var box2 = document.getElementById("dabbaa2");
var box3 = document.getElementById("dabbaa3");


var seconds;
var remseconds;
var minutes;
var toCount = false;




// START

function Start()
{
    document.getElementById("disknumber").value = "DISKS: " + CurrentDisks;
    disknumber.style.fontWeight = 'bold';
    disknumber.style.fontStyle = 'italic';

    

}


//




function toSubmit()
{
    //display('start');
    remove('seconds');
    // remove('ok')

    // seconds = Number(secInput.value)
    seconds = 60;
    
    Counting();
} 


var gamestarts = false;

function Play(stat)
{
    gamestarts = true;

    IsFirst = false;
    display('start');

    remove('seconds');

    if (CurrentDisks == 3)
    {
        seconds = 45;

        
        box1.append(disk1);
        box1.append(disk2);
        box1.append(disk3);
        box1.style.flexDirection = "column-reverse";


        list1 = ["disk3", "disk2", "disk1"];
        list2 = [];
        list3 = [];

        list1.reverse();
        list2.reverse();
        list3.reverse();

        UpdatedArray = [ "stop", ...list1, "l1", ...list2, "l2",  ...list3, "l3"];
        // UpdateGame(list1, list2, list3);

    }
    else if (CurrentDisks == 4)
    {
        seconds = 60;


        box1.append(disk1);
        box1.append(disk2);
        box1.append(disk3);
        box1.append(disk4);
        box1.style.flexDirection = "column-reverse";

        list1 = ["disk4", "disk3", "disk2", "disk1"];
        list2 = [];
        list3 = [];

        list1.reverse();
        list2.reverse();
        list3.reverse();

        UpdatedArray = [ "stop", ...list1, "l1", ...list2, "l2",  ...list3, "l3"];
    }
    else if (CurrentDisks == 5)
    {

        seconds = 75;

        box1.append(disk1);
        box1.append(disk2);
        box1.append(disk3);
        box1.append(disk4);
        box1.append(disk5);

        box1.style.flexDirection = "column-reverse";

        list1 = ["disk5","disk4", "disk3", "disk2", "disk1"];
        list2 = [];
        list3 = [];

        list1.reverse();
        list2.reverse();
        list3.reverse();

        UpdatedArray = [ "stop", ...list1, "l1", ...list2, "l2",  ...list3, "l3"];
    }
    else if (CurrentDisks == 6)
    {
        seconds = 90;

        box1.append(disk1);
        box1.append(disk2);
        box1.append(disk3);
        box1.append(disk4);
        box1.append(disk5);
        box1.append(disk6);
        box1.style.flexDirection = "column-reverse";

        list1 = ["disk6","disk5","disk4", "disk3", "disk2", "disk1"];
        list2 = [];
        list3 = [];

        list1.reverse();
        list2.reverse();
        list3.reverse();

        UpdatedArray = [ "stop", ...list1, "l1", ...list2, "l2",  ...list3, "l3"];
    }
    else if (CurrentDisks == 7)
    {
        seconds = 115;

        box1.append(disk1);
        box1.append(disk2);
        box1.append(disk3);
        box1.append(disk4);
        box1.append(disk5);
        box1.append(disk6);
        box1.append(disk7);
        box1.style.flexDirection = "column-reverse";

        list1 = ["disk7","disk6","disk5","disk4", "disk3", "disk2", "disk1"];
        list2 = [];
        list3 = [];

        list1.reverse();
        list2.reverse();
        list3.reverse();

        UpdatedArray = [ "stop", ...list1, "l1", ...list2, "l2",  ...list3, "l3"];
    }
    else if (CurrentDisks == 8)
    {
        seconds = 130;

        box1.append(disk1);
        box1.append(disk2);
        box1.append(disk3);
        box1.append(disk4);
        box1.append(disk5);
        box1.append(disk6);
        box1.append(disk7);
        box1.append(disk8);

        box1.style.flexDirection = "column-reverse";

        list1 = ["disk8","disk7","disk6","disk5","disk4", "disk3", "disk2", "disk1"];
        list2 = [];
        list3 = [];


        list1.reverse();
        list2.reverse();
        list3.reverse();

        UpdatedArray = [ "stop", ...list1, "l1", ...list2, "l2",  ...list3, "l3"];
    }
    else if (CurrentDisks == 9)
    {
        seconds = 145;

        box1.append(disk1);
        box1.append(disk2);
        box1.append(disk3);
        box1.append(disk4);
        box1.append(disk5);
        box1.append(disk6);
        box1.append(disk7);
        box1.append(disk8);
        box1.append(disk9);
        
        box1.style.flexDirection = "column-reverse";


        list1 = ["disk9", "disk8","disk7","disk6","disk5","disk4", "disk3", "disk2", "disk1"];
        list2 = [];
        list3 = [];


        list1.reverse();
        list2.reverse();
        list3.reverse();

        UpdatedArray = [ "stop", ...list1, "l1", ...list2, "l2",  ...list3, "l3"];
    }

    DraggableItem();
    
    Counting();
    check(stat);

} 

function display(e)
{
    document.getElementById(e).style.display = 'block';
}

function remove(e)
{
    document.getElementById(e).style.display = 'none';
}

function check(stat)
{
    toCount = stat.value;
    if (stat.id == 'start')
    {
        display("stop");
        remove("start");
        display("restart");
        remove("pausepanel");


    }    
    else if (stat.id == 'stop')
    {
        display("cont");
        remove("stop");
        display("pausepanel");
        remove("restart");
    }
    else if (stat.id == "restart")
    {

        toCount = false;
        count();

        if (confirm("Are you sure you want to restart?\nYou will loss all the Progress!") == true) 
        {
            location.reload();
        } 
        else
        {
            remove("pausepanel");
            toCount = true;
            count();
        }
    }
    else
    {
        display("stop");
        remove("cont");
        remove("pausepanel");
        display("restart");
    }
}

function count()
{
    if (seconds > 0)
    {
        if (toCount == true)
        {
            seconds--;
            remseconds = seconds % 60;
            minutes = Math.floor(seconds/60);
            
            if (minutes < 10)
            {
                minutes = "0" + minutes;
            }

            if (remseconds  < 10)
            {
                remseconds = "0" + remseconds;
            }

            container.innerHTML = '<span style = "font-size: 20px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: bold; color: rgb(62, 62, 62); margin-left: 0%; margin-bottom:20px"></span>';
            container.innerHTML = minutes + " : " + remseconds;
            // document.getElementById("Timer").value = minutes + " : " + remseconds;
            // 
        }
    }   
    else
    {
        display("timeuppanel");
        toCount = false;
        
    }
}

function Counting()
{
    remseconds = seconds % 60;
    minutes = Math.floor(seconds/60);

    container.innerHTML = '<span style = "font-size: 20px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: bold; color: rgb(62, 62, 62); margin-left: 0%; margin-bottom:20px"></span>';
    container.innerHTML = minutes + " : " + remseconds;
    // document.getElementById("Timer").value = minutes + " : " + remseconds;
    setInterval(count, 1000);
}




//////////////////////////////////////////////////////////////////////////



var disk = document.getElementsByClassName("disks");
var dabba = document.getElementsByClassName("dabbaa");

var dragItem = null;
var Moves = 0;

var IsFirst = true;



// MY CODE

let list1 = [];
let list2 = [];
let list3 = [];

var IsMoved = false;


function DraggableItem()
{

  
    for(var i of disk)
    {
        i.draggable = false;
        i.style.cursor = "context-menu";
    }
    
    disk1.draggable = false;
    disk1.style.cursor = "context-menu";
    disk2.draggable = false;
    disk2.style.cursor = "context-menu";
    disk3.draggable = false;
    disk3.style.cursor = "context-menu";
    disk4.draggable = false;
    disk4.style.cursor = "context-menu";
    disk5.draggable = false;
    disk5.style.cursor = "context-menu";
    disk6.draggable = false;
    disk6.style.cursor = "context-menu";
    disk7.draggable = false;
    disk7.style.cursor = "context-menu";
    disk8.draggable = false;
    disk8.style.cursor = "context-menu";
    disk9.draggable = false;
    disk9.style.cursor = "context-menu";
   

    // LIST 1
    if (list1[list1.length-1] == "disk1")
    {
        disk1.draggable = true;
        disk1.style.cursor = "pointer";
        disk1.addEventListener('dragstart', dragStart);
        disk1.addEventListener('dragend', dragEnd);
    }
    else if (list1[list1.length-1] == "disk2")
    {
        disk2.draggable = true;
        disk2.style.cursor = "pointer";
        disk2.addEventListener('dragstart', dragStart);
        disk2.addEventListener('dragend', dragEnd);
    }
    else if (list1[list1.length-1] == "disk3")
    {
        disk3.draggable = true;
        disk3.style.cursor = "pointer";
        disk3.addEventListener('dragstart', dragStart);
        disk3.addEventListener('dragend', dragEnd);
    }
    else if (list1[list1.length-1] == "disk4")
    {
        disk4.draggable = true;
        disk4.style.cursor = "pointer";
        disk4.addEventListener('dragstart', dragStart);
        disk4.addEventListener('dragend', dragEnd);
    }
    else if (list1[list1.length-1] == "disk5")
    {
        disk5.draggable = true;
        disk5.style.cursor = "pointer";
        disk5.addEventListener('dragstart', dragStart);
        disk5.addEventListener('dragend', dragEnd);
    }
    else if (list1[list1.length-1] == "disk6")
    {
        disk6.draggable = true;
        disk6.style.cursor = "pointer";
        disk6.addEventListener('dragstart', dragStart);
        disk6.addEventListener('dragend', dragEnd);
    }
    else if (list1[list1.length-1] == "disk7")
    {
        disk7.draggable = true;
        disk7.style.cursor = "pointer";
        disk7.addEventListener('dragstart', dragStart);
        disk7.addEventListener('dragend', dragEnd);
    }
    else if (list1[list1.length-1] == "disk8")
    {
        disk8.draggable = true;
        disk8.style.cursor = "pointer";
        disk8.addEventListener('dragstart', dragStart);
        disk8.addEventListener('dragend', dragEnd);
    }
    else if (list1[list1.length-1] == "disk9")
    {
        disk9.draggable = true;
        disk9.style.cursor = "pointer";
        disk9.addEventListener('dragstart', dragStart);
        disk9.addEventListener('dragend', dragEnd);
    }
    

    //LIST 2

    if (list2[list2.length-1] == "disk1")
    {
        disk1.draggable = true;
        disk1.style.cursor = "pointer";
        disk1.addEventListener('dragstart', dragStart);
        disk1.addEventListener('dragend', dragEnd);
    }
    else if (list2[list2.length-1] == "disk2")
    {
        disk2.draggable = true;
        disk2.style.cursor = "pointer";
        disk2.addEventListener('dragstart', dragStart);
        disk2.addEventListener('dragend', dragEnd);
    }
    else if (list2[list2.length-1] == "disk3")
    {
        disk3.draggable = true;
        disk3.style.cursor = "pointer";
        disk3.addEventListener('dragstart', dragStart);
        disk3.addEventListener('dragend', dragEnd);
    }
    else if (list2[list2.length-1] == "disk4")
    {
        disk4.draggable = true;
        disk4.style.cursor = "pointer";
        disk4.addEventListener('dragstart', dragStart);
        disk4.addEventListener('dragend', dragEnd);
    }
    else if (list2[list2.length-1] == "disk5")
    {
        disk5.draggable = true;
        disk5.style.cursor = "pointer";
        disk5.addEventListener('dragstart', dragStart);
        disk5.addEventListener('dragend', dragEnd);
    }
    else if (list2[list2.length-1] == "disk6")
    {
        disk6.draggable = true;
        disk6.style.cursor = "pointer";
        disk6.addEventListener('dragstart', dragStart);
        disk6.addEventListener('dragend', dragEnd);
    }
    else if (list2[list2.length-1] == "disk7")
    {
        disk7.draggable = true;
        disk7.style.cursor = "pointer";
        disk7.addEventListener('dragstart', dragStart);
        disk7.addEventListener('dragend', dragEnd);
    }
    else if (list2[list2.length-1] == "disk8")
    {
        disk8.draggable = true;
        disk8.style.cursor = "pointer";
        disk8.addEventListener('dragstart', dragStart);
        disk8.addEventListener('dragend', dragEnd);
    }
    else if (list2[list2.length-1] == "disk9")
    {
        disk9.draggable = true;
        disk9.style.cursor = "pointer";
        disk9.addEventListener('dragstart', dragStart);
        disk9.addEventListener('dragend', dragEnd);
    }
    


    //LIST 3

    if (list3[list3.length-1] == "disk1")
    {
        disk1.draggable = true;
        disk1.style.cursor = "pointer";
        disk1.addEventListener('dragstart', dragStart);
        disk1.addEventListener('dragend', dragEnd);
    }
    else if (list3[list3.length-1] == "disk2")
    {
        disk2.draggable = true;
        disk2.style.cursor = "pointer";
        disk2.addEventListener('dragstart', dragStart);
        disk2.addEventListener('dragend', dragEnd);
    }
    else if (list3[list3.length-1] == "disk3")
    {
        disk3.draggable = true;
        disk3.style.cursor = "pointer";
        disk3.addEventListener('dragstart', dragStart);
        disk3.addEventListener('dragend', dragEnd);
    }
    else if (list3[list3.length-1] == "disk4")
    {
        disk4.draggable = true;
        disk4.style.cursor = "pointer";
        disk4.addEventListener('dragstart', dragStart);
        disk4.addEventListener('dragend', dragEnd);
    }
    else if (list3[list3.length-1] == "disk5")
    {
        disk5.draggable = true;
        disk5.style.cursor = "pointer";
        disk5.addEventListener('dragstart', dragStart);
        disk5.addEventListener('dragend', dragEnd);
    }
    else if (list3[list3.length-1] == "disk6")
    {
        disk6.draggable = true;
        disk6.style.cursor = "pointer";
        disk6.addEventListener('dragstart', dragStart);
        disk6.addEventListener('dragend', dragEnd);
    }
    else if (list3[list3.length-1] == "disk7")
    {
        disk7.draggable = true;
        disk7.style.cursor = "pointer";
        disk7.addEventListener('dragstart', dragStart);
        disk7.addEventListener('dragend', dragEnd);
    }
    else if (list3[list3.length-1] == "disk8")
    {
        disk8.draggable = true;
        disk8.style.cursor = "pointer";
        disk8.addEventListener('dragstart', dragStart);
        disk8.addEventListener('dragend', dragEnd);
    }
    else if (list3[list3.length-1] == "disk9")
    {
        disk9.draggable = true;
        disk9.style.cursor = "pointer";
        disk9.addEventListener('dragstart', dragStart);
        disk9.addEventListener('dragend', dragEnd);
    }
}



function dragStart()
{
    
    // STARTING CLOCK WITH FIRST MOVE
    if (IsFirst)
    {
        Play(start);
        IsFirst = false;
    }

    dragItem = this;
    
    setTimeout(()=>this.style.display = "none", 0 );

}


function dragEnd()
{
    setTimeout(()=>this.style.display = "flex", 0 );

    dragItem = null;
    
    // FirstUndo = true;
    MovedAfterUndo = true;
    // DraggableItem();

   
}

for(var j of dabba)
{
    j.addEventListener('dragover', dragOver);
    j.addEventListener('dragenter', dragEnter);
    j.addEventListener('dragleave', dragLeave);
    j.addEventListener('drop', Drop);
}


function removeItemOnce(arr, value) 
{
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
}

let WinningList = [];

function IsWin(list)
{
    

    if (CurrentDisks == 3)
    {
        WinningList = ["disk3", "disk2", "disk1"];
        WinningList.reverse();

        if (list.length === WinningList.length && list.every((val, index) => val === WinningList[index]))
        {
            toCount = false;
            display('winpanel');
        }


    }
    else if (CurrentDisks == 4)
    {
        WinningList = ["disk4", "disk3", "disk2", "disk1"];
        WinningList.reverse();
 
        if (list.length === WinningList.length && list.every((val, index) => val === WinningList[index]))
        {
            toCount = false;
            display('winpanel');
        }
    }
    else if (CurrentDisks == 5)
    {
        WinningList = ["disk5", "disk4", "disk3", "disk2", "disk1"];
        WinningList.reverse();
 
        if (list.length === WinningList.length && list.every((val, index) => val === WinningList[index]))
        {
            toCount = false;
            display('winpanel');
        }
    }
    else if (CurrentDisks == 6)
    {
        WinningList = ["disk6", "disk5", "disk4", "disk3", "disk2", "disk1"];
        WinningList.reverse();
 
        if (list.length === WinningList.length && list.every((val, index) => val === WinningList[index]))
        {
            toCount = false;
            display('winpanel');
        }
    }
    else if (CurrentDisks == 7)
    {
        WinningList = ["disk7","disk6", "disk5", "disk4", "disk3", "disk2", "disk1"];
        WinningList.reverse();
 
        if (list.length === WinningList.length && list.every((val, index) => val === WinningList[index]))
        {
            toCount = false;
            display('winpanel');
        }
    }
    else if (CurrentDisks == 8)
    {
        WinningList = ["disk8", "disk7", "disk6", "disk5", "disk4", "disk3", "disk2", "disk1"];
        WinningList.reverse();
 
        if (list.length === WinningList.length && list.every((val, index) => val === WinningList[index]))
        {
            toCount = false;
            display('winpanel');
        }
    }
    else if (CurrentDisks == 9)
    {
        WinningList = ["disk9", "disk8", "disk7", "disk6", "disk5", "disk4", "disk3", "disk2", "disk1"];
        WinningList.reverse();
 
        if (list.length === WinningList.length && list.every((val, index) => val === WinningList[index]))
        {
            toCount = false;
            display('winpanel');
        }
    }
    
}

var shouldbedragged;
var thedraggedBlocknum;
var thedragitemId;
var tempid;
var thepreviousBlocknum;

function Drop()
{



    
    // if (dragItem.parentElement.id == "dabbaa1")
    // {
    //     if (dragItem.id == "disk1" && (list1[length-1].id == "disk2" || list1[length-1].id == "disk3"|| list1[length-1].id == "disk4" || list1[length-1].id == "disk5"
    //     || list1[length-1].id == "disk6" || list1[length-1].id == "disk7" || list1[length-1].id == "disk8" || list1[length-1].id == "disk9"))
    //     {
    //         if (tempid == "dabbaa2")
    //         {
    //             box2.append(dragItem);
    //         }
    //         else if (tempid == "dabbaa3")
    //         {
    //             box3.append(dragItem);
    //         }
    //     }
    //     else if (dragItem.id == "disk2" && (list1[length-1].id == "disk3"|| list1[length-1].id == "disk4" || list1[length-1].id == "disk5"
    //     || list1[length-1].id == "disk6" || list1[length-1].id == "disk7" || list1[length-1].id == "disk8" || list1[length-1].id == "disk9"))
    //     {
    //         if (tempid == "dabbaa2")
    //         {
    //             box2.append(dragItem);
    //         }
    //         else if (tempid == "dabbaa3")
    //         {
    //             box3.append(dragItem);
    //         }
    //     }
    //     else if (dragItem.id == "disk3" && (list1[length-1].id == "disk4" || list1[length-1].id == "disk5"
    //     || list1[length-1].id == "disk6" || list1[length-1].id == "disk7" || list1[length-1].id == "disk8" || list1[length-1].id == "disk9"))
    //     {
    //         if (tempid == "dabbaa2")
    //         {
    //             box2.append(dragItem);
    //         }
    //         else if (tempid == "dabbaa3")
    //         {
    //             box3.append(dragItem);
    //         }
    //     }
    //     else if (dragItem.id == "disk4" && (list1[length-1].id == "disk5"
    //     || list1[length-1].id == "disk6" || list1[length-1].id == "disk7" || list1[length-1].id == "disk8" || list1[length-1].id == "disk9"))
    //     {
    //         if (tempid == "dabbaa2")
    //         {
    //             box2.append(dragItem);
    //         }
    //         else if (tempid == "dabbaa3")
    //         {
    //             box3.append(dragItem);
    //         }
    //     }
    //     else if (dragItem.id == "disk5" && (list1[length-1].id == "disk6" || list1[length-1].id == "disk7" || list1[length-1].id == "disk8" || list1[length-1].id == "disk9"))
    //     {
    //         if (tempid == "dabbaa2")
    //         {
    //             box2.append(dragItem);
    //         }
    //         else if (tempid == "dabbaa3")
    //         {
    //             box3.append(dragItem);
    //         }
    //     }
    //     else if (dragItem.id == "disk6" && (list1[length-1].id == "disk7" || list1[length-1].id == "disk8" || list1[length-1].id == "disk9"))
    //     {
    //         if (tempid == "dabbaa2")
    //         {
    //             box2.append(dragItem);
    //         }
    //         else if (tempid == "dabbaa3")
    //         {
    //             box3.append(dragItem);
    //         }
    //     }else if (dragItem.id == "disk7" && ( list1[length-1].id == "disk8" || list1[length-1].id == "disk9"))
    //     {
    //         if (tempid == "dabbaa2")
    //         {
    //             box2.append(dragItem);
    //         }
    //         else if (tempid == "dabbaa3")
    //         {
    //             box3.append(dragItem);
    //         }
    //     }else if (dragItem.id == "disk8" && ( list1[length-1].id == "disk9"))
    //     {
    //         if (tempid == "dabbaa2")
    //         {
    //             box2.append(dragItem);
    //         }
    //         else if (tempid == "dabbaa3")
    //         {
    //             box3.append(dragItem);
    //         }
    //     }
    // }


    // let name = document.getElementById(dragItem.id)

    tempid = dragItem.parentElement.id;
    
    // this.append(dragItem);
    thisid = this.id;
    console.log(thisid);   
    
    // BONUS
        

    thedragitemId = dragItem.id;
    thedraggedBlocknum = thedragitemId.replace( /^\D+/g, '');

    console.log(dragItem.parentElement.id);

    if (thisid == "dabbaa1")
    {
        if (list1.length > 0)
        {
            previousinlist = list1[list1.length-1];
            thepreviousBlocknum = previousinlist.replace( /^\D+/g, '');

            if (thedraggedBlocknum > thepreviousBlocknum)
            {
                shouldbedragged = true;
                console.log("zero");
            }
            else
            {
                console.log("zero");
                shouldbedragged = false;
    
            }
        }
        else if (list1.length == 0)
        {
            console.log("zero");
            shouldbedragged = true;
        }

    }
    else if (thisid == "dabbaa2")
    {
        if (list2.length > 0)
        {
            previousinlist = list2[list2.length-1];
            thepreviousBlocknum = previousinlist.replace( /^\D+/g, '');

            if (thedraggedBlocknum > thepreviousBlocknum)
            {
                console.log("zero");
                shouldbedragged = true;
            }
            else
            {
                shouldbedragged = false;
                console.log("zero");
                // box2.append(dragItem);


            }
        }
        else if (list2.length == 0)
        {
            console.log("zero");
            shouldbedragged = true;
        }
    }
    else if (thisid == "dabbaa3")
    {
        if (list3.length > 0)
        {
            previousinlist = list3[list3.length-1];
            thepreviousBlocknum = previousinlist.replace( /^\D+/g, '');

            if (thedraggedBlocknum > thepreviousBlocknum)
            {
                console.log("zero");
                shouldbedragged = true;
            }
            else
            {
                console.log("zero");
                shouldbedragged = false;
                // box3.append(dragItem);

            }
        }
        else if (list3.length == 0)
        {
            console.log("zero");
            shouldbedragged = true;
        }
    }


    if (shouldbedragged == true)
    {
     
        if (this.id == "dabbaa1")
        {
            box1.append(dragItem);
            console.log("zero");
            
        }
        else if (this.id == "dabbaa2")
        {
            box2.append(dragItem);
            console.log("zero");

        }
        else if (this.id == "dabbaa3")
        {
            box3.append(dragItem);
            console.log("zero");

        }

        shouldbedragged = false;
        DraggableItem();

      
        //
        if (tempid != dragItem.parentElement.id)
        {
            if (dragItem.parentElement.id == "dabbaa1")
            {
                this.style.flexDirection = "column-reverse";

                removeItemOnce(list2, dragItem.id );
                removeItemOnce(list3, dragItem.id );
        
                // list1.reverse();
                list1.push(dragItem.id);
        
                // INCREASING MOVES
                Moves += 1;
                NumberOfMoves.value = Moves;
            }
            else if (dragItem.parentElement.id == "dabbaa2")
            {
                
                this.style.flexDirection = "column-reverse";

                removeItemOnce(list1, dragItem.id );
                removeItemOnce(list3, dragItem.id );
                list2.push(dragItem.id);
        
                // INCREASING MOVES
                Moves += 1;
                NumberOfMoves.value = Moves;
            }
            else if (dragItem.parentElement.id == "dabbaa3")
            {
                this.style.flexDirection = "column-reverse";


                removeItemOnce(list1, dragItem.id );
                removeItemOnce(list2, dragItem.id );

                list3.push(dragItem.id);
        
                // INCREASING MOVES
                Moves += 1;
                NumberOfMoves.value = Moves;
            }
        }
        
        // console.log(tempid);

        // UpdateGame(list1, list2, list3);
        
        // DraggableItem();

        
        
        // console.log(list1);
        // console.log(list2);
        // console.log(list3);


        

        

        UpdateGame(list1, list2, list3);
        
        DraggableItem();


        // CHECKING WIN
        IsWin(list3);
    }

    
}

function dragOver(e)
{
    e.preventDefault();
}

function dragEnter(e)
{
    e.preventDefault();
}
function dragLeave(e)
{
    e.preventDefault();
}

var UpdatedArray = [];

function UpdateGame(l1, l2, l3)
{
    var temp = [...UpdatedArray];

    UpdatedArray = [ ...temp, "stop", ...l1, "l1", ...l2, "l2",  ...l3, "l3"];

}

function UpdateRedoArray(l1, l2, l3)
{
    var temp = [...RedoArray];

    RedoArray = [ "l3", ...l3, "l2", ...l2,  "l1" , ...l1, "stop", ...temp];

}

var MovedAfterUndo = false;
var FirstUndo = true;
var index;
var templen;
const UpdatedArrayLen = UpdatedArray.length; 
var NewLength;

var bool1;
var bool2;
var bool3;


var RedoArray = [];

var R1= [];
var R2= [];
var R3= [];

var Redo1 = false;
var Redo2 = false;
var Redo3 = false;

var RedoIndex = 0;
var RedoIndexValue = UpdatedArray[RedoIndex];

var pop = UpdatedArray.length - 1;
var popvalue = UpdatedArray[pop];

function SettingRedoArrayWhileUndo()
{

    R1 = [];
    R2 = [];
    R3 = [];

    pop = UpdatedArray.length - 1;
    popvalue = UpdatedArray[pop];

    console.log(popvalue);
    
    RedoIndex = UpdatedArray.length - 1;
    RedoIndexValue = UpdatedArray[RedoIndex];

    console.log(RedoIndexValue);

    while(RedoIndexValue != "stop")
    {
        if (RedoIndexValue == "l3" && UpdatedArray[RedoIndex - 1] != "l2")
        {
            RedoIndex -= 1;
            RedoIndexValue = UpdatedArray[RedoIndex];
            
            console.log(RedoIndexValue);
            

            Redo3 = true;
            Redo1 = false;
            Redo2 = false;

            // R3.push(RedoIndexValue);
            // list3.push(UpdatedArray[templen]);
        }
        else if (RedoIndexValue == "l2" && UpdatedArray[RedoIndex - 1] != "l1")
        {
            RedoIndex -= 1;
            RedoIndexValue = UpdatedArray[RedoIndex];

            Redo2 = true;
            Redo1 = false;
            Redo3 = false;


            // R2.push(UpdatedArray[RedoIndex]);
            // list3.push(UpdatedArray[templen]);
        }
        else if (RedoIndexValue == "l1" && UpdatedArray[RedoIndex - 1] != "stop")
        {
            RedoIndex -= 1;
            RedoIndexValue = UpdatedArray[RedoIndex];

            Redo1 = true;
            Redo2 = false;
            Redo3 = false;

            // R1.push(UpdatedArray[RedoIndex]);
            // list3.push(UpdatedArray[templen]);
        }
        else
        {
            if (RedoIndexValue == "l3" || RedoIndexValue == "l2" || RedoIndexValue == "l1" )
            {
                RedoIndex -= 1;
                RedoIndexValue = UpdatedArray[RedoIndex];

                if (RedoIndexValue == "l3")
                {
                    Redo3 = true;
                    Redo1 = false;
                    Redo2 = false;
                }
                else if (RedoIndexValue == "l2")
                {
                    Redo3 = false;
                    Redo1 = false;
                    Redo2 = true;
                }
                else if (RedoIndexValue == "l1")
                {
                    Redo3 = false;
                    Redo1 = true;
                    Redo2 = false;
                }

            }


        }
        

        if (Redo3 == true)
        {
            if (RedoIndexValue != "l1" && RedoIndexValue != "l2" && RedoIndexValue != "l3" )
            {
                console.log(RedoIndexValue);

                R3.push(RedoIndexValue);

            }
        }
        else if (Redo2 == true)
        {
            if (RedoIndexValue != "l1" && RedoIndexValue != "l2" && RedoIndexValue != "l3" )
            {
                console.log(RedoIndexValue);
                R2.push(RedoIndexValue);

            }
        }
        else if (Redo1 == true)
        {
            if (RedoIndexValue != "l1" && RedoIndexValue != "l2" && RedoIndexValue != "l3" )
            {
                console.log(RedoIndexValue);
                R1.push(RedoIndexValue);

            }
        }
        
        

        RedoIndex -= 1;
        RedoIndexValue = UpdatedArray[RedoIndex];

        if (RedoIndexValue == "stop")
        {

            R3.reverse();
            R2.reverse();
            R1.reverse();


            console.log(R3);
            console.log(R2);
            console.log(R1);




            UpdateRedoArray(R1, R2, R3);
            console.log(RedoArray);

            while (popvalue != "stop")
            {
                UpdatedArray.pop();

                console.log(popvalue);
                console.log(UpdatedArray);

                pop -= 1;
                popvalue = UpdatedArray[pop];

            }

            UpdatedArray.pop();
            pop -= 1;
            popvalue = UpdatedArray[pop];

            return;
        }
        

    }   

}


function Undo()
{
    

    console.log(UpdatedArray);

    
    list3 = [];
    list2 = [];
    list1 = [];


    if (FirstUndo)
    {
        
        templen = UpdatedArray.length - 1;
        index = UpdatedArray[templen];

        while(index!= "stop")
        {
            templen -= 1;
            index = UpdatedArray[templen];
        }

        
        templen -= 1;

        if (templen < 0)
        {
            templen = 0;
        }
        
        index = UpdatedArray[templen];

        
        console.log(templen);
        console.log(index);


        FirstUndo = false;
        console.log("zero");
        
        
    }
    
    else
    {
        NewLength -= 1;
        templen = NewLength;
        
        if (templen < 0)
        {
            templen = 0;
        }

        index = UpdatedArray[templen];
        console.log("zero");

    }
    
    if (templen > 0)
    {
        
        SettingRedoArrayWhileUndo();
        while(index != "stop")
        {
            
            if(index == "l3" && UpdatedArray[templen-1] != "l2")
            {   
                bool2 = false;
                bool3 = true;
                bool1 = false;

                templen -= 1;
                index = UpdatedArray[templen];

            }
            else if (index == "l2" && UpdatedArray[templen-1] != "l1")
            {
                bool2 = true;
                bool3 = false;
                bool1 = false;

                templen -= 1;
                index = UpdatedArray[templen];
            }
            else if (index == "l1" && UpdatedArray[templen-1] != "stop")
            {  
                bool1 = true;
                bool2 = false;
                bool3 = false;

                templen -= 1;
                index = UpdatedArray[templen];
            }

            if (bool3)
            {
                if (UpdatedArray[templen] != "l3" && UpdatedArray[templen] != "l2" && UpdatedArray[templen] != "l1")
                {
                    list3.push(UpdatedArray[templen]);
                }
            }
            else if (bool2)
            {
                if (UpdatedArray[templen] != "l3" && UpdatedArray[templen] != "l2" && UpdatedArray[templen] != "l1")
                {
                    list2.push(UpdatedArray[templen]);
                }
            }
            else if (bool1)
            {
                if (UpdatedArray[templen] != "l3" && UpdatedArray[templen] != "l2" && UpdatedArray[templen] != "l1")
                {
                    list1.push(UpdatedArray[templen]);
                }
            }

            templen -= 1;
            index = UpdatedArray[templen];

            if (index == "stop")
            {
                console.log(list1);
                console.log(list2);
                console.log(list3);

                NewLength = templen;
            }

            
        }

        list1.reverse();
        list2.reverse();
        list3.reverse();

        for(var i = 0; i < list1.length; i++)
        {
            if (list1[i] == "disk1")
            {
                box1.append(disk1);

                disk1.style.display = "block";
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (list1[i] == "disk2")
            {
                box1.append(disk2);
                disk2.style.display = "block";
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (list1[i] == "disk3")
            {
                box1.append(disk3);
                disk3.style.display = "block";
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (list1[i] == "disk4")
            {
                box1.append(disk4);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (list1[i] == "disk5")
            {
                box1.append(disk5);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (list1[i] == "disk6")
            {

                box1.append(disk6);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (list1[i] == "disk7")
            {
                box1.append(disk7);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (list1[i] == "disk8")
            {
                box1.append(disk8);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (list1[i] == "disk9")
            {
                box1.append(disk9);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";

            }
        }

        for(var i = 0; i < list2.length; i++)
        {

            if (list2[i] == "disk1")
            {
                disk1.style.display = "flex";
                box2.append(disk1);
            }
            if (list2[i] == "disk2")
            {
                disk2.style.display = "flex";
                box2.append(disk2);
            }
            if (list2[i] == "disk3")
            {
                disk3.style.display = "flex";
                box2.append(disk3);
            }
            if (list2[i] == "disk4")
            {
                disk4.style.display = "flex";
                box2.append(disk4);
            }
            if (list2[i] == "disk5")
            {
                disk5.style.display = "flex";
                box2.append(disk5);
            }
            if (list2[i] == "disk6")
            {
                disk6.style.display = "flex";
                box2.append(disk6);
            }
            if (list2[i] == "disk7")
            {
                disk7.style.display = "flex";
                box2.append(disk7);
            }
            if (list2[i] == "disk8")
            {
                disk8.style.display = "flex";
                box2.append(disk8);
            }
            if (list2[i] == "disk9")
            {
                disk9.style.display = "flex";
                box2.append(disk9);

            }
        }

        for(var i = 0; i < list3.length; i++)
        {

            if (list3[i] == "disk1")
            {
                disk1.style.display = "flex";
                box3.append(disk1);
            }
            if (list3[i] == "disk2")
            {
                disk2.style.display = "flex";
                box3.append(disk2);
            }
            if (list3[i] == "disk3")
            {
                disk3.style.display = "flex";
                box3.append(disk3);
            }
            if (list3[i] == "disk4")
            {
                disk4.style.display = "flex";
                box3.append(disk4);
            }
            if (list3[i] == "disk5")
            {
                disk5.style.display = "flex";
                box3.append(disk5);
            }
            if (list3[i] == "disk6")
            {
                disk6.style.display = "flex";
                box3.append(disk6);
            }
            if (list3[i] == "disk7")
            {
                disk7.style.display = "flex";
                box3.append(disk7);
            }
            if (list3[i] == "disk8")
            {
                disk8.style.display = "flex";
                box3.append(disk8);
            }
            if (list3[i] == "disk9")
            {
                disk9.style.display = "flex";
                box3.append(disk9);

            }

        }

        DraggableItem();
        Moves -= 1;
        NumberOfMoves.value = Moves;
    }
    

}


var DoingUndo = 0;
var DoingUndoValue = RedoArray[DoingUndo];

var DoR1 = [];
var DoR2 = [];
var DoR3 = [];

var boolr1 = false;
var boolr2 = false;
var boolr3 = false;

function Redo()
{
    if (RedoArray.length > 6)
    {
        DoingUndo = 0;
        DoingUndoValue = RedoArray[DoingUndo];
        console.log(DoingUndoValue);


        DoR1 = [];
        DoR2 = [];
        DoR3 = [];

        while(DoingUndoValue != "stop")
        {
            
            if (DoingUndoValue == "l3" && RedoArray[DoingUndo + 1] != "l2")
            {   
                boolr2 = false;
                boolr3 = true;
                boolr1 = false;

                DoingUndo += 1;
                DoingUndoValue = RedoArray[DoingUndo];

            }
            else if (DoingUndoValue == "l2" && RedoArray[DoingUndo + 1] != "l1")
            {
                boolr2 = true;
                boolr3 = false;
                boolr1 = false;

                DoingUndo += 1;
                DoingUndoValue = RedoArray[DoingUndo];
            }
            else if (DoingUndoValue == "l1" && RedoArray[DoingUndo + 1] != "stop")
            {  
                boolr1 = true;
                boolr2 = false;
                boolr3 = false;

                DoingUndo += 1;
                DoingUndoValue = RedoArray[DoingUndo];
            }
            if (boolr3)
            {
                if (RedoArray[DoingUndo] != "l3" && RedoArray[DoingUndo] != "l2" && RedoArray[DoingUndo] != "l1")
                {
                    DoR3.push(RedoArray[DoingUndo]);
                    console.log(DoR3);

                }
            }
            else if (boolr2)
            {
                if (RedoArray[DoingUndo] != "l3" && RedoArray[DoingUndo] != "l2" && RedoArray[DoingUndo] != "l1")
                {
                    DoR2.push(RedoArray[DoingUndo]);
                    console.log(DoR2);

                }
            }
            else if (boolr1)
            {
                if (RedoArray[DoingUndo] != "l3" && RedoArray[DoingUndo] != "l2" && RedoArray[DoingUndo] != "l1")
                {
                    DoR1.push(RedoArray[DoingUndo]);
                    console.log(DoR1);

                }
            }

            DoingUndo += 1;
            DoingUndoValue = RedoArray[DoingUndo];

            if (DoingUndoValue == "stop")
            {
                UpdateGame(DoR1, DoR2, DoR2);
                RedoArray.reverse();
                var Count = DoR1.length + DoR2.length + DoR3.length + 4;
                while(Count != 0)
                {
                    RedoArray.pop();
                    Count -= 1;
                }
                RedoArray.reverse();    
            }
        }



        for(var i = 0; i < DoR1.length; i++)
        {
            if (DoR1[i] == "disk1")
            {
                box1.append(disk1);
                disk1.style.display = "block";
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (DoR1[i] == "disk2")
            {
                box1.append(disk2);
                disk2.style.display = "block";
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (DoR1[i] == "disk3")
            {
                box1.append(disk3);
                disk3.style.display = "block";
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (DoR1[i] == "disk4")
            {
                box1.append(disk4);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (DoR1[i] == "disk5")
            {
                box1.append(disk5);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (DoR1[i] == "disk6")
            {
                box1.append(disk6);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (DoR1[i] == "disk7")
            {
                box1.append(disk7);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (DoR1[i] == "disk8")
            {
                box1.append(disk8);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
            if (DoR1[i] == "disk9")
            {
                box1.append(disk9);
                box1.style.display = "flex";
                box1.style.flexDirection = "column-reverse";
            }
        }

        for(var i = 0; i < DoR2.length; i++)
        {
            if (DoR2[i] == "disk1")
            {
                disk1.style.display = "flex";
                box2.append(disk1);
            }
            if (DoR2[i] == "disk2")
            {
                disk2.style.display = "flex";
                box2.append(disk2);
            }
            if (DoR2[i] == "disk3")
            {
                disk3.style.display = "flex";
                box2.append(disk3);
            }
            if (DoR2[i] == "disk4")
            {
                disk4.style.display = "flex";
                box2.append(disk4);
            }
            if (DoR2[i] == "disk5")
            {
                disk5.style.display = "flex";
                box2.append(disk5);
            }
            if (list2[i] == "disk6")
            {
                disk6.style.display = "flex";
                box2.append(disk6);
            }
            if (DoR2[i] == "disk7")
            {
                disk7.style.display = "flex";
                box2.append(disk7);
            }
            if (DoR2[i] == "disk8")
            {
                disk8.style.display = "flex";
                box2.append(disk8);
            }
            if (DoR2[i] == "disk9")
            {
                disk9.style.display = "flex";
                box2.append(disk9);

            }
        }

        for(var i = 0; i < DoR3.length; i++)
        {

            if (DoR3[i] == "disk1")
            {
                disk1.style.display = "flex";
                box3.append(disk1);
            }
            if (DoR3[i] == "disk2")
            {
                disk2.style.display = "flex";
                box3.append(disk2);
            }
            if (DoR3[i] == "disk3")
            {
                disk3.style.display = "flex";
                box3.append(disk3);
            }
            if (DoR3[i] == "disk4")
            {
                disk4.style.display = "flex";
                box3.append(disk4);
            }
            if (DoR3[i] == "disk5")
            {
                disk5.style.display = "flex";
                box3.append(disk5);
            }
            if (DoR3[i] == "disk6")
            {
                disk6.style.display = "flex";
                box3.append(disk6);
            }
            if (DoR3[i] == "disk7")
            {
                disk7.style.display = "flex";
                box3.append(disk7);
            }
            if (DoR3[i] == "disk8")
            {
                disk8.style.display = "flex";
                box3.append(disk8);
            }
            if (DoR3[i] == "disk9")
            {
                disk9.style.display = "flex";
                box3.append(disk9);

            }
        }
        Moves += 1;
        NumberOfMoves.value = Moves;
    }
}






function IncreaseDisks()
{
    if (gamestarts == false)
    {
        if (CurrentDisks == 3)
        {
            display("disk4");
            CurrentDisks += 1;
            
        }
        else if (CurrentDisks == 4)
        {
            display("disk5");
            CurrentDisks += 1;
            
        }
        else if (CurrentDisks == 5)
        {
            display("disk6");
            CurrentDisks += 1;
            
        }
        else if (CurrentDisks == 6)
        {
            display("disk7");
            CurrentDisks += 1;
            
        }
        else if (CurrentDisks == 7)
        {
            display("disk8");
            CurrentDisks += 1;
            
        }
        else if (CurrentDisks == 8)
        {
            display("disk9");
            CurrentDisks += 1;
    
        }
    
        document.getElementById("disknumber").value = "DISKS: " + CurrentDisks;
        disknumber.style.fontWeight = 'bold';
        disknumber.style.fontStyle = 'italic';
    }
    else
    {
        if (confirm("Are you Sure you want to Modify Number of Disks?\nYou will loss all the Progress!") == true) 
        {
            location.reload();
        } 
        else
        {
            remove("pausepanel");
            toCount = true;
            count();
        }
    }

} 



function DecreaseDisks()
{
    if (gamestarts == false)
    {
            
        if (CurrentDisks == 4)
        {
            remove("disk4");
            CurrentDisks -= 1;
            
        }
        else if (CurrentDisks == 5)
        {
            remove("disk5");
            CurrentDisks -= 1;
            
        }
        else if (CurrentDisks == 6)
        {
            remove("disk6");
            CurrentDisks -= 1;
            
        }
        else if (CurrentDisks == 7)
        {
            remove("disk7");
            CurrentDisks -= 1;
            
        }
        else if (CurrentDisks == 8)
        {
            remove("disk8");
            CurrentDisks -= 1;
            
        }
        else if (CurrentDisks == 9)
        {
            remove("disk9");
            CurrentDisks -= 1;

        }

        document.getElementById("disknumber").value = "DISKS: " + CurrentDisks;
        disknumber.style.fontWeight = 'bold';
        disknumber.style.fontStyle = 'italic';
    }
    else
    {
        if (confirm("Are you Sure you want to Modify Number of Disks?\nYou will loss all the Progress!") == true) 
        {
            location.reload();
        } 
        else
        {
            remove("pausepanel");
            toCount = true;
            count();
        }
    }

} 



