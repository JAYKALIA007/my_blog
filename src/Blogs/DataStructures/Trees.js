import img1 from "./trees.png";
import bstNotBST from "./bst_notBst.png";
import { Helmet } from "react-helmet";

function Trees() {
    return (
        <div className="blog">
          <Helmet>
            <title>jaykalia/blog/dsa/trees</title>
            <meta charSet="utf-8" />
          </Helmet>
    
          <span className="recent-work">
            <header className="tree-header">TREES, your friendly neighbourhood data structures.</header>
          </span>
          <br />
          <br />
          <div className="blogBody">
            <span className="project-header">What is a Tree?</span>
            <p>
              A Tree is a non-linear data structure that organizes data in a 
              hierarchical way.<br/> As opposed to arrays or linked lists that are linear, a tree 
              can have zero or more child nodes. 
            </p>
            <span className="project-header">Structure of a tree.</span>
            <p>
              The tree data structure is a collection of nodes. 
              These nodes are connected to each other by edges. Each node contains a value (data) 
              and may or may not have a child node. <br/><br/>
              A tree usually starts with a single root/parent node. Every child of the 
              tree descends from this particular root node. Moreover, every child node descends 
              from only one parent node. Also, the parent child relationships are unidirectional. 
              <br/>
              The nodes at the very end of each branch are called as the <em className="blog-filter">{`leaf nodes`} </em> .
            </p>
            <img src={img1} alt="tree data structure" style={{ maxWidth: "90%" ,  display: "block", marginLeft: "auto", marginRight: "auto",}} />
            <p>
                <div className="code-example blog-filter">
                    {`In the tree above:`}
                    <br />
                    &nbsp;&nbsp;{`A is a parent of B and C.`}
                    <br/>
                    &nbsp;&nbsp;{`B is called a child of A.`}
                    <br/>
                    &nbsp;&nbsp;{`B and C are siblings to each other.`}
                    <br />
                    &nbsp;&nbsp;{`E, H, I, K, O and P are leaves.`}
                    <br/>
                    &nbsp;&nbsp;{`Also, D is a parent for nodes H and I.`}
                    <br/>
                </div>
            </p>
            <br />
            <span className="project-header">Some real world use cases:</span>
            <br/> 

            {/* <img src={facebook_comments} alt="facebook comments are made up of tree data structure" 
                style={{ maxWidth: "80%" , display: "block", marginLeft: "auto", marginRight: "auto",}}
            /> */}
            <p>
              <ol>
                <li className="tree-list">Facebook comments show this behaviour when you comment on a post. And then, someone else comments on your comment.</li>
                <li className="tree-list">Web pages are created by something called as the DOM. And this, is nothing but a tree data structure.</li>
                <li className="tree-list">Abstract Syntax Trees or ASTs are tree representations of code. They are a fundamental part of the way a compiler works.</li>
                <li className="tree-list">Linked list is a technically a type of tree, but with just one single path i.e; they are linear.</li>
              </ol>
            </p>
            <hr/>

            {/* <div className="code-example blog-filter">
              npm install react-router-dom
            </div> */}

            <span className="project-header">What is a Binary Tree?</span>
            <p>
                A binary tree is a tree data structure composed of nodes, 
                each of which has at most, two children, referred to as left and right nodes. 
                The tree starts off with a single node known as the root.
            </p>
            <p>
            For a binary tree, each node has a value associated with it and two other pointers.
              <ol>
                <li className="tree-list"> One to the left of the node, called as the <em className="blog-filter">{`left child`} </em>.</li>
                <li className="tree-list"> The other to the right of the node, called as the <em className="blog-filter">{`right child`} </em>.</li>
              </ol>
            </p>
            <p>
                In order for a tree to qualify as a binary tree, each and every node should 
                satisfy the following criterias:<br/><br/>
                <div className="code-example blog-filter">
                    <ol>
                      <li className="tree-list">Each node can have either zero, one or two child nodes only.</li>
                      <li className="tree-list">Each child node can have only one parent.</li>
                      <li className="tree-list">Each node represents a certain state.</li>
                    </ol>
                </div>
            </p>
            <br/>
            <span className="project-header">Height and depth of a binary tree.</span>
            <p>
              The height of a node is the number of edges on the longest path from the node to a leaf.
              &nbsp;<em className="blog-filter">{`A leaf node will have a height of zero.`} </em><br/><br/>
              The depth of a node is the number of edges frpm the node to the tree's root node.
              &nbsp;<em className="blog-filter">{`A root node will have a depth of zero.`} </em>
            </p>


            <span className="project-header">Types of Binary Trees:</span><br />
              <p>
                <ol>
                        <li><em className="blog-filter">{`Full Binary Tree.`} </em>: All the nodes have zero or two children, except for the leaf nodes.</li>
                        <li> <em className="blog-filter">{`Complete Binary Tree.`}</em>: All levels are completely filled, except for the lowest one, which is filled from the left. </li>
                        <li> <em className="blog-filter">{`Perfect Binary Tree.`} </em>: Completely filled out i.e; a node either has zero or two children. Also, the bottom layer is completely filled.</li>
                </ol>
              </p>
            <hr/>
            <span className="project-header">What is a binary search tree?</span><br />
            <p>
              A binary search tree (BST) is a binary tree where each node has a comparable key (and an associated value)
              and satisfies the restriction that the key in any node is 
              <em className="blog-filter">{` larger than the keys in all nodes in that node's left subtree and smaller than the keys in all nodes in that node's right subtree.`}</em>
            </p>
            <img src={bstNotBST} alt="facebook comments are made up of tree data structure" 
                style={{ maxWidth: "100%" , display: "block", marginLeft: "auto", marginRight: "auto",}}
            />
            <p>
              Among the trees represented above, the one on the left hand side follows the criteria that all the nodes in the
              left hand side of a particular node have key value less than that of the parent node and all on the right are greater than that of the parent.
              Hence, it is safe to say that it is a BST. <br/>
              However, for the one on the right hand side all but the last node; i.e node with a value of two lies on the right hand side of it's grand parent(node with a value of three),
              which stops it from being qualified as a BST.
            </p>

            <span className="project-header">Advantages of using a binary search tree.</span><br />

            <p>
              <ol>
                <li className="tree-list">Searching become very efficient in a binary search tree since, we get a hint at each step, about which sub-tree contains the desired element.</li>
                <li className="tree-list">The binary search tree is considered as efficient data structure in comparison to arrays and linked lists. In searching process, it removes half sub-tree at every step. 
                   Searching for an element in a binary search tree takes <em className="blog-filter">{`O(log2n) `}</em>&nbsp; time. In worst case, the time it takes to search an element is <em className="blog-filter">{` O(n) `}</em>&nbsp;.</li>
                <li className="tree-list">It also speeds up the insertion and deletion operations as compared to that in array and linked list.</li>
              </ol>
            </p>

            <span className="project-header">Implementing a BST.</span><br />
            <p>
            For the implementation, we'll use an auxiliary Node class that will 
            store int values, and keep a reference to each child:
              <div className="code-example blog-filter">
                {`class Node {`}
                <br />
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                {`int data ;`}
                <br />
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                {`Node left ;`}
                <br/>
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                {`Node right ;`}
                <br/>
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                {`Node(int data) {`}
                <br />
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                {`this.data = data ;`}
                <br />
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                {`right = null ;`}
                <br />
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                {`left = null ;`}
                <br />
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                {`}`}
                <br />
                &nbsp;&nbsp; &nbsp;&nbsp;
                {`}`}
                <br />
              </div>
            </p>
            <br/>

            <p>
               <em className="blog-filter">{` Common operations on a BST :`}</em>
               <ol>
                 <li>Search for a node</li>
                 <div className="code-example blog-filter">
                    {` boolean searchRec(Node root, int data) {`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    {`if(root == null) `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`return false ;`}
                    <br/>
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                    {`if(root.data > data ) `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    {`return searchRec(root.left , data) ;`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                    {`else if(root.data < data ) `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    {`searchRec(root.right , data) ;`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                    {`else if(root.data == data ) `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    {`return true ;`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    {`}`}
                    <br />
                  </div>
                  <br/>
                 <li>Insert a new node</li>
                 In order to insert a new node, first find the place where you should insert the node( so as to satisy the BST condition).
                 <div className="code-example blog-filter">
                    {` Node insertRec(Node root, int data) {`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    {`if(root == null) {`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`root=new Node(data);`}
                    <br/>
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`return root;`}
                    <br/>
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
                    {`}`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                    {`if(root.data > data ) `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    {`root.left = insert(root.left , data);`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                    {`else if(root.data < data ) `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    {`root.right = insert(root.right , data);`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  
                    {`return root;`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    {`}`}
                    <br />
                  </div>
                  <br/>

                  <li>Delete a node</li>
                   In order to delete a node, first search for the node that you want to delete. Once that is done, there can be three cases that can arise.
                   <ul>
                     <li>Case 1 : If the node to be deleted has no child, make it null.</li>
                     <li>Case 2 : If the node to be deleted has one child, copy the child at node's positon.</li>
                     <li>Case 3 : If the node to be deleted has two children, replace the node with inorder successor.</li>
                   </ul>
                   <br/>
                   Let's dive into the code now.
                 <div className="code-example blog-filter">
                    {` Node deleteRec(Node root, int data) {`}
                    <br />
                    &nbsp;&nbsp; 
                    {`if(root == null) {`}
                    <br />
                    
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    {`return root ;`}
                    <br/>
                    &nbsp;&nbsp; &nbsp;&nbsp; 
                    {`}`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  
                    {`if(root.data > data ) `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                    {`root.left = deleteRec(root.left , data) ;`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  
                    {`else if(root.data < data ) `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                    {`root.right = deleteRec(root.right , data) ;`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  
                    {`else {`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                    {`if(root.left == null )`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    {`return root.right ; `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                    {`if(root.right == null )`}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    {`return root.left ; `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; 
                    {`root.data = inOrderSuccessor(root.right);`}
                    <br/>
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; 
                    {`root.right = deleteRec(root.right , root.data); `}
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                    {`}`}
                    <br/>
                    &nbsp;&nbsp; &nbsp;&nbsp;  
                    {`return root;`}
                    <br />
                    &nbsp;&nbsp; 
                    {`}`}
                    <br />
                  </div>


               </ol>
            </p>
            <hr/>
            <p>
            If you would like to know more about BST's, their drawbacks, how to improve their performance by using AVL trees? <br/>
              <a href="https://jaykalia07.medium.com/perfectly-balanced-as-all-things-should-be-avl-trees-9979724fba7d"
              target="_blank"
              rel="noopener noreferrer"
              >Click here.</a>
            </p>

            <span className="project-header">Conclusion</span>
            <p>
              That’s a lot of vocabulary for one tiny tree! 
              Trees don’t stay tiny for long! 
              Keep working at understanding trees by learning how to implement them, about their time and space complexity, and where they work best!
            </p>
            <p>Thanks for reading this.🙏🏻</p>
          </div>
        </div>
    )
}
export default Trees;