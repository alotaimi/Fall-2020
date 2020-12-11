/*
 * This file is where you should implement your binary search tree.  It already
 * contains skeletons of the functions you need to implement (along with
 * documentation for each function).  Feel free to implement any additional
 * functions you might need.  Also, don't forget to include your name and
 * @oregonstate.edu email address below.
 *
 * Name:Mishary Alotaibi
 * Email:Alotaimi@oregonstate.edu
 */

#include <stdlib.h>

#include "bst.h"
#include "stack.h"

/*
 * This structure represents a single node in a BST.  In addition to containing
 * pointers to its two child nodes (i.e. `left` and `right`), it contains two
 * fields representing the data stored at this node.  The `key` field is an
 * integer value that should be used as an identifier for the data in this
 * node.  Nodes in the BST should be ordered based on this `key` field.  The
 * `value` field stores data associated with the key.
 *
 * You should not modify this structure.
 */
struct bst_node {
  int key;
  void* value;
  struct bst_node* left;
  struct bst_node* right;
};


/*
 * This structure represents an entire BST.  It specifically contains a
 * reference to the root node of the tree.
 *
 * You should not modify this structure.
 */
struct bst {
  struct bst_node* root;
};

/*
 * This function should allocate and initialize a new, empty, BST and return
 * a pointer to it.
 */
struct bst* bst_create() {
  struct bst* temp = malloc(sizeof(struct bst));
  temp->root = NULL;
  // temp->root->left = NULL;
  // temp->root->right = NULL;
  // temp->root->key = 0;
  // temp->root->value = NULL;
  return temp;
}

void printBST(struct bst_node* root, int depth){
  // printf("%0*c",depth, "");
  // printf("%*s", depth, "=");
  // printf("|_ %s: %d \n",title, root->key);
  if(root->left != NULL){
    printBST(root->left, depth+1);
    free(root->left);
  }
  if(root->right != NULL){
    printBST(root->right, depth+1);
    free(root->right);
  }
}

/*
 * This function should free the memory associated with a BST.  While this
 * function should up all memory used in the BST itself, it should not free
 * any memory allocated to the pointer values stored in the BST.  This is the
 * responsibility of the caller.
 *
 * Params:
 *   bst - the BST to be destroyed.  May not be NULL.
 */
void bst_free(struct bst* bst) {
  printBST(bst->root, 0);
  // free(bst->root);
  free(bst->root);
  free(bst);
}


// snippet from https://www.techcrashcourse.com/2016/06/program-to-calculate-size-of-binary-tree.html
int GetSize(struct bst_node *root){
    if(root == NULL)
       return 0;
    return GetSize(root->left) + 1 + GetSize(root->right);
}

/*
 * This function should return the total number of elements stored in a given
 * BST.
 *
 * Params:
 *   bst - the BST whose elements are to be counted.  May not be NULL.
 */
int bst_size(struct bst* bst) {
  return GetSize(bst->root);
}

/*
 * This function should insert a new key/value pair into the BST.  The key
 * should be used to order the key/value pair with respect to the other data
 * stored in the BST.  The value should be stored along with the key, once the
 * right location in the tree is found.
 *
 * Params:
 *   bst - the BST into which a new key/value pair is to be inserted.  May not
 *     be NULL.
 *   key - an integer value that should be used to order the key/value pair
 *     being inserted with respect to the other data in the BST.
 *   value - the value being inserted into the BST.  This should be stored in
 *     the BST alongside the key.  Note that this parameter has type void*,
 *     which means that a pointer of any type can be passed.
 */
void bst_insert(struct bst* bst, int key, void* value) {
  struct bst_node* P = NULL;
  struct bst_node* N = NULL;
  struct bst_node* New = malloc(sizeof(struct bst_node));
  New->key = key;
  New->value = value;
  New->left = NULL;
  New->right = NULL;
  if(bst->root == NULL){
    bst->root = New;
  }
  else{
  N = bst->root;
  while(N != NULL){
    P = N;
    if(key < N->key){
      N = N->left;
    }
    else{
      N = N->right;
    }
  }
  if(key < P->key){
    P->left = New;  
  }
  else{
    P->right = New; 
  }
  }
  return;
}

struct bst_node* SuccessorFinder(struct bst_node* root){
  struct bst_node* S = root;
  while(S != NULL && S->left != NULL){
    S = S->left;
  }
  return S;
}
struct bst_node* ParentSuccessor(struct bst_node* root){
  struct bst_node* S = root;
  struct bst_node* PS = NULL;
  while(S != NULL && S->left != NULL){
    PS = S;
    S = S->left;
  }
  return PS;
}
struct bst_node* Finder(struct bst_node* root,int key){
  struct bst_node* N = root;
  struct bst_node* P = NULL;
  while(N != NULL){
    if(N->key == key){
      return N;
    }
    else if(key < N->key){
      N = N->left;
    }
    else{
      N = N->right;
    }
  }
}

struct bst_node* FinderP(struct bst_node* root,int key){
  struct bst_node* N = root;
  struct bst_node* P = N;
  while(N != NULL){
    if(N->key == key){
      return P;
    }
    else if(key < N->key){
       P=N;
      N = N->left;
    }
    else{
       P=N;
      N = N->right;
    }
  }
}
/*
 * This function should remove a key/value pair with a specified key from a
 * given BST.  If multiple values with the same key exist in the tree, this
 * function should remove the first one it encounters (i.e. the one closest to
 * the root of the tree).
 *
 * Params:
 *   bst - the BST from which a key/value pair is to be removed.  May not
 *     be NULL.
 *   key - the key of the key/value pair to be removed from the BST.
 */

void bst_remove(struct bst* bst, int key) {
  struct bst_node* S = SuccessorFinder(bst->root->right);
  struct bst_node* PS = ParentSuccessor(bst->root->right);
  struct bst_node* P = FinderP(bst->root,key);
  struct bst_node* N = Finder(bst->root,key);
  if(N->right == NULL && N->left == NULL){
    if(N->key < P->key){
      P->left = NULL;
      free(N);
    }
    else{
      P->right = NULL;
      free(N);
    }
  }
  else if(N->right != NULL && N->left != NULL){
    if(P->key > N->key){
      P->left = NULL;
      P->left = N->right;
      N->right = NULL;
      P->left->left = N->left;
      N->left = NULL;
      free(N);
    }
    else if(P->key > N->key){
      P->right = NULL;
      P->right = N->left;
      N->right = NULL;
      P->right->right = N->left;
      N->right = NULL;
      free(N);
    }
    else if(P->key == N->key){
      PS->left = NULL;
      PS->left = S->right;
      S->right = NULL;
      S->right = N->right;
      S->left = N->left;
      N->left = NULL;
      N->right = NULL;
      bst->root = S;
      free(N);
    }
  }
  else if(N->right != NULL){
    if(P->key > N->key){
      P->left = NULL;
      P->left = N->right;
      N->right = NULL;
      free(N);
    }
    else if(P->key < N->key){
      P->right = NULL;
      P->right = N->right;
      N->right = NULL;
      free(N);
    }
  }
  else if(N->left != NULL){
    if(P->key > N->key){
      P->left = NULL;
      P->left = N->left;
      N->left = NULL;
      free(N);
    }
    else if(P->key < N->key){
      P->right = NULL;
      P->right = N->left;
      N->left = NULL;
      free(N);
    }
  }
}

/*
 * This function should return the value associated with a specified key in a
 * given BST.  If multiple values with the same key exist in the tree, this
 * function should return the first one it encounters (i.e. the one closest to
 * the root of the tree).  If the BST does not contain the specified key, this
 * function should return NULL.
 *
 * Params:
 *   bst - the BST from which a key/value pair is to be removed.  May not
 *     be NULL.
 *   key - the key of the key/value pair whose value is to be returned.
 *
 * Return:
 *   Should return the value associated with the key `key` in `bst` or NULL,
 *   if the key `key` was not found in `bst`.
 */
void* bst_get(struct bst* bst, int key) {
  struct bst_node* N = bst->root;
  while(N != NULL){
    if(N->key == key){
      return N->value;
    }
    else if(key < N->key){
      N = N->left;
    }
    else{
      N = N->right;
    }
  }
  return NULL;
}

/*****************************************************************************
 **
 ** BST iterator definition (extra credit only)
 **
 *****************************************************************************/

/*
 * Structure used to represent a binary search tree iterator.  It contains
 * only a reference to a stack to be used to implement the iterator.
 *
 * You should not modify this structure.
 */
struct bst_iterator {
  struct stack* stack;
};

/*
 * This function should allocate and initialize an iterator over a specified
 * BST and return a pointer to that iterator.
 *
 * Params:
 *   bst - the BST for over which to create an iterator.  May not be NULL.
 */
struct bst_iterator* bst_iterator_create(struct bst* bst) {
  return NULL;
}

/*
 * This function should free all memory allocated to a given BST iterator.
 * It should NOT free any memory associated with the BST itself.  This is the
 * responsibility of the caller.
 *
 * Params:
 *   iter - the BST iterator to be destroyed.  May not be NULL.
 */
void bst_iterator_free(struct bst_iterator* iter) {
  return;
}

/*
 * This function should indicate whether a given BST iterator has more nodes
 * to visit.  It should specifically return 1 (true) if the iterator has at
 * least one more node to visit or 0 (false) if it does not have any more
 * nodes to visit.
 *
 * Param:
 *   iter - the BST iterator to be checked for remaining nodes to visit.  May
 *     not be NULL.
 */
int bst_iterator_has_next(struct bst_iterator* iter) {
  return 0;
}

/*
 * This function should return both the value and key associated with the
 * current node pointed to by the specified BST iterator and advnce the
 * iterator to point to the next node in the BST (in in-order order).
 *
 * Because a function can't return two things, the key associated with the
 * current node should be returned the normal way, while its value should be
 * returned via the argument `value`.  Specifically, the argument `value`
 * is a pointer to a void pointer.  The current BST node's value (a void
 * pointer) should be stored at the address represented by `value` (i.e. by
 * dereferencing `value`).  This will look something like this:
 *
 *   *value = current_node->value;
 *
 * Parameters:
 *   iter - BST iterator.  The key and value associated with this iterator's
 *     current node should be returned, and the iterator should be updated to
 *     point to the next node in the BST (in in-order order).  May not be NULL.
 *   value - pointer at which the current BST node's value should be stored
 *     before this function returns.
 *
 * Return:
 *   This function should return the key associated with the current BST node
 *   pointed to by `iter`.
 */
int bst_iterator_next(struct bst_iterator* iter, void** value) {
  if (value) {
    *value = NULL;
  }
  return 0;
}
