// [row][column]

class Knight {
    constructor(){
        this.mark = 'K';
        this.xMoves = [-1 , 1 ,-2 ,-2 , -1 ,1 , 2 ,2];
        this.yMoves = [-2 ,-2 ,-1 , 1 ,  2 ,2 ,-1 ,1]
    }
}

let k = new Knight();

/* Write a function that receives two parameters:
    The first is the position of the knight in the board
    The second is the target position 

    knightMoves([origin],[target])

*/
/* This function has to return all the steps until find the target.
    For example:

    knightMoves([0,0],[2,4]) => [0,0] - [1,2] - [2,4] 
*/

function knightMoves(origin, target){

    // Check if move is valid
    function isValid(x,y){
        if((x >=0 && x < 8) && (y >= 0 && y < 8)) return true;
        return false;
    }

    // Check if new move was visited before
    function checkIfVisited(visited,target){
        for(let i = 0; i < visited.length;i++){
            if(visited[i][0]=== target[0] && visited[i][1] === target[1]){
                return true
            }
        }
        if(target[0] === origin[0] && target[1] === origin[1]){
            return true
        }
        return false
    }

    // Returns path when tx and ty are the same as target
    function getPath(array){
        if(array[0]===origin[0] && array[1]===origin[1]) return [origin]
        let path = "";
        let finded = visited.find((el)=>{
            return el[0] === array[0] && el[1] === array[1]
        })
        path = [finded[0],finded[1]]

        return [...getPath(finded[2]),path]
    }

    let queue = [];
    queue.push(origin);
    
    let visited = [];

    while(queue.length > 0){

        let [dx,dy] = queue[0];

        //Remove the top coord
        queue.shift();
        //This loop checks what moves are possible
        for (let i = 0; i < 8; i++){
            let tx = dx + k.xMoves[i];
            let ty = dy + k.yMoves[i];
            
            if(isValid(tx, ty) && !(checkIfVisited(visited,[tx,ty]))){
                queue.push([tx,ty]);
                visited.push([tx,ty,[dx,dy]]);
            }
            if(tx === target[0] && ty === target[1]){
                return getPath([tx,ty]);
            }
        }
    }

}

 console.log(knightMoves([3,3],[4,3]));
