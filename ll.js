class Node{
    constructor(val)
    {
        this.val=val;
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.length=0
    }
    
    prepend(val)
    {
        let node=new Node(val)
        if(!this.head)
        {
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node
        }
        this.length++;
    }
    
    print(){
        let curr=this.head;
        let data=''
        if(this.length==0) console.log("list empty")
        else{
        while(curr)
        {
            data +=curr.val +" "
            curr=curr.next;
        }
        console.log(data)
        }
    }
    
    append(val){
        
        let node=new Node(val)
        if(!this.head)
        this.head=node
        else{
            let curr=this.head;
            while(curr.next)
            {
                curr=curr.next;
            }
            curr.next=node;
        }
        this.length++;
    }  
    
    insert(val,index){
        var node =new Node(val)
        if(index<0 || index>this.length)
        return null
        else if(index==0){
            node.next=this.head;
            this.head=node
        }
        else{
            let curr=this.head
            for(let i=0;i<index-1;i++)
            {
                curr=curr.next;
            }
            node.next=curr.next
            curr.next=node
        }
        
    }
}

var ll=new LinkedList();
ll.prepend("hi")
ll.prepend("hello")
ll.append("howdy")
ll.insert("yes",1)
ll.print()
console.log(ll)
