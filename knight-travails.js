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

/*
    We will start with the initial position of knight and will push it in a queue.
    We will then iterate until our queue is empty.
    At each iteration we will pop out the front element of the queue and will then generate all the possible moves from this position.
    If the generated move is valid and we have not traversed it previously, then we will insert it into our queue. 
    Also if the current position is the desired destination then we will just return the desired value. 
    If we have iterated all the possible positions and still not reached the final position then we will return -1.

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
        return false
    }

    let queue = [];
    queue.push(origin);
    
    let visited = [];

    while(queue.length > 0){

        if(queue[0][0] === target[0] && queue[0][1] === target[1]){
            visited.push(target);
            return visited;
        }

        let dx = queue[0][0];
        let dy = queue[0][1];

        //Remove the top coord
        visited.push(queue.shift())

        //This loop checks what moves are possible
        for (let i = 0; i < 8; i++){
            let tx = dx + k.xMoves[i];
            let ty = dy + k.yMoves[i];

            if(isValid(tx, ty) && !(checkIfVisited(visited,[tx,ty]))){
                queue.push([tx,ty]);
            }
        }
    }

}

 console.log(knightMoves([0,0],[2,4]));
