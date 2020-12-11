/*
 * In this file, you will write the structures and functions needed to
 * implement a priority queue.  Feel free to implement any helper functions
 * you need in this file to implement a priority queue.  Make sure to add your
 * name and @oregonstate.edu email address below:
 *
 * Name: mishary alotaibi
 * Email:alotaimi@oregonstate.edu
 */

#include <stdlib.h>
#include <stdio.h>
#include "pq.h"
#include "dynarray.h"

/*
 * This is the structure that represents a priority queue.  You must define
 * this struct to contain the data needed to implement a priority queue.
 */
struct pq{
  struct dynarray* array;
  struct node* node;
};

struct node{
  void* value;
  int priority;
};


/*
 * This function should allocate and initialize an empty priority queue and
 * return a pointer to it.
 */
struct pq* pq_create() {
  struct pq* temp = malloc(sizeof(struct pq));
  temp->array = dynarray_create();
  temp->node = malloc(sizeof(struct node));
}

int parent(int i){
  return ((i-1)/2);
}
int left(int i){
  return ((i*2)+1);
}
int right(int i){
  return ((i*2)+2);
}
void shiftUp(int i, struct pq* pq) 
{
  while (i >= 0)
  {
      struct node* node = (struct node*)dynarray_get(pq->array, i);
      struct node* Parent = (struct node*)dynarray_get(pq->array, parent(i));
      if (Parent->priority > node->priority)
      {
        dynarray_set(pq->array, parent(i), node);
        dynarray_set(pq->array, i, Parent);
        i = parent(i);
      }
      else{
        break;
      }
}
}

void shiftDown(int i, struct pq* pq) 
{ 
  int leftIndex = left(i);
  int rightIndex = right(i);
  int currentIndex = i;
  int minIndex = -1;
  while(currentIndex < dynarray_size(pq->array)){
    struct node* currentN = (struct node*)dynarray_get(pq->array, currentIndex);
    leftIndex = left(currentIndex);
    rightIndex = right(currentIndex);
    if(rightIndex < dynarray_size(pq->array)){
      struct node* rightN = (struct node*)dynarray_get(pq->array, rightIndex);
      struct node* leftN = (struct node*)dynarray_get(pq->array, leftIndex);
      minIndex = leftIndex;
      if(rightN->priority < leftN->priority){
        minIndex = rightIndex;
      }
      struct node* minN = (struct node*)dynarray_get(pq->array, minIndex);
      if(minN->priority < currentN->priority){
        dynarray_set(pq->array, minIndex, currentN);
        dynarray_set(pq->array, currentIndex, minN);
        currentIndex = minIndex;
      }
      else{
        break;
      }
    }
    else if(leftIndex < dynarray_size(pq->array)){
      struct node* leftN = (struct node*)dynarray_get(pq->array, leftIndex);
      if(leftN->priority < currentN->priority){
        dynarray_set(pq->array, leftIndex, currentN);
        dynarray_set(pq->array, currentIndex, leftN);
        currentIndex = leftIndex;
      }
      else{
        break;
      }
    }
    else{
      break;
    }
  }
}

/*
 * This function should free the memory allocated to a given priority queue.
 * Note that this function SHOULD NOT free the individual elements stored in
 * the priority queue.  That is the responsibility of the caller.
 *
 * Params:
 *   pq - the priority queue to be destroyed.  May not be NULL.
 */
void pq_free(struct pq* pq) {
  dynarray_free(pq->array);
  free(pq->node);
  free(pq);
  return;
}


/*
 * This function should return 1 if the specified priority queue is empty and
 * 0 otherwise.
 *
 * Params:
 *   pq - the priority queue whose emptiness is to be checked.  May not be
 *     NULL.
 *
 * Return:
 *   Should return 1 if pq is empty and 0 otherwise.
 */
int pq_isempty(struct pq* pq) {
  if(dynarray_size(pq->array) == 0){
    return 1;
  }
  else{
  return 0;
  }
}


/*
 * This function should insert a given element into a priority queue with a
 * specified priority value.  Note that in this implementation, LOWER priority
 * values are assigned to elements with HIGHER priority.  In other words, the
 * element in the priority queue with the LOWEST priority value should be the
 * FIRST one returned.
 *
 * Params:
 *   pq - the priority queue into which to insert an element.  May not be
 *     NULL.
 *   value - the value to be inserted into pq.
 *   priority - the priority value to be assigned to the newly-inserted
 *     element.  Note that in this implementation, LOWER priority values
 *     should correspond to elements with HIGHER priority.  In other words,
 *     the element in the priority queue with the LOWEST priority value should
 *     be the FIRST one returned.
 */
void pq_insert(struct pq* pq, void* value, int priority) {
  struct node* temp = malloc(sizeof(struct node));
  temp->priority = priority;
  temp->value = value;
  int index = dynarray_size(pq->array);
  dynarray_insert(pq->array, temp);
  // struct node* result;
  // for (int i = 0; i < dynarray_size(pq->array)-1; i++)
  // {
  //   result = (struct node*)dynarray_get(pq->array, i);
  //   printf("Added: %d index: %d\n", result->priority,i);
  // }
  shiftUp(index, pq);
}

/*
 * This function should return the value of the first item in a priority
 * queue, i.e. the item with LOWEST priority value.
 *
 * Params:
 *   pq - the priority queue from which to fetch a value.  May not be NULL or
 *     empty.
 *
 * Return:
 *   Should return the value of the first item in pq, i.e. the item with
 *   LOWEST priority value.
 */
void* pq_first(struct pq* pq) {
  struct node* temp = (struct node*)dynarray_get(pq->array, 0);
  return temp->value;
}


/*
 * This function should return the priority value of the first item in a
 * priority queue, i.e. the item with LOWEST priority value.
 *
 * Params:
 *   pq - the priority queue from which to fetch a priority value.  May not be
 *     NULL or empty.
 *
 * Return:
 *   Should return the priority value of the first item in pq, i.e. the item
 *   with LOWEST priority value.
 */
int pq_first_priority(struct pq* pq) {
  struct node* temp = (struct node*)dynarray_get(pq->array, 0);
  return temp->priority;
}


/*
 * This function should return the value of the first item in a priority
 * queue, i.e. the item with LOWEST priority value, and then remove that item
 * from the queue.
 *
 * Params:
 *   pq - the priority queue from which to remove a value.  May not be NULL or
 *     empty.
 *
 * Return:
 *   Should return the value of the first item in pq, i.e. the item with
 *   LOWEST priority value.
 */
void* pq_remove_first(struct pq* pq) {
  struct node* result = (struct node*)dynarray_get(pq->array,0);
  void* resultt = result->value;
  int index = dynarray_size(pq->array)-1;
  struct node* tempx;
  struct node* temp = (struct node*)dynarray_get(pq->array,index);
  dynarray_set(pq->array, 0, temp);
  dynarray_remove(pq->array, index);
  free(result);
  shiftDown(0,pq);
  return resultt;
}