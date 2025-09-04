let num = 10;

const mainfunct = () => {
    let num = 20;
    const subfunct = () => {
       let num = 30;
        const subchild = () => {
            let num = 40;
            console.log(`function of subchild ${num}`);

        }
        subchild();
        console.log(`function of sub ${num}`);
    }
    subfunct();
    console.log(`function of main ${num}`);
}
mainfunct();
console.log(`function of outer ${num}`);