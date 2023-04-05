interface ITreeValue {
  value: number;
  children: ITreeValue[];
}

function traverseTree(node: ITreeValue, callback: (node: ITreeValue) => void) {
  callback(node);
  if (node.children) {
    node.children.forEach((childNode) => {
      traverseTree(childNode, callback);
    });
  }
}

function traverseTreeLoop(
  node: ITreeValue,
  callback: (node: ITreeValue) => void,
) {
  const stack: ITreeValue[] = [node];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    callback(currentNode);

    if (currentNode.children) {
      for (let i = currentNode.children.length - 1; i >= 0; i--) {
        stack.push(currentNode.children[i]);
      }
    }
  }
}

const tree: ITreeValue = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 3, children: [] },
        { value: 4, children: [] },
      ],
    },
    { value: 5, children: [] },
  ],
};

traverseTree(tree, (node) => console.log(node.value));
