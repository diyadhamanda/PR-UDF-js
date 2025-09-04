let emname = document.getElementById('emname');
let month = document.getElementById('month');
let basicsalary = document.getElementById('basicsalary');
let da = document.getElementById('da');
let hra = document.getElementById('hra');
let ma = document.getElementById('ma');
let pf = document.getElementById('pf');
let esi = document.getElementById('esi');
let pt = document.getElementById('pt');

const display = () => {
    let employeen = emname.value;
    let salaryMonth = month.value;
    let bsalary = parseInt(basicsalary.value);
    let dallowance = parseInt(da.value);
    let hrallowance = parseInt(hra.value);
    let mallowance = parseInt(ma.value);
    let pfund = parseInt(pf.value);
    let esifund = parseInt(esi.value);
    let ptax = parseInt(pt.value);

    let hra1 = bsalary * hrallowance / 100;
    let da1 = bsalary * dallowance / 100;
    let ma1 = bsalary * mallowance / 100;
    let pf1 = bsalary * pfund / 100;
    let esi1 = bsalary * esifund / 100;

    let gross = bsalary + hra1 + da1 + ma1;
    let deduction = pf1 + esi1 + ptax;
    let net = gross - deduction;

    document.getElementById('empname').innerText = employeen;
    document.getElementById('e-month').innerText = salaryMonth;
    document.getElementById('basics').innerText = '₹ ' + bsalary;
    document.getElementById('dearnessa').innerText = '₹ ' + da1;
    document.getElementById('housea').innerText = '₹ ' + hra1;
    document.getElementById('medicala').innerText = '₹ ' + ma1;
    document.getElementById('providentf').innerText = '₹ ' + pf1;
    document.getElementById('taxs').innerText = '₹ ' + esi1;
    document.getElementById('professionalt').innerText = '₹ ' + ptax;
    document.getElementById('gsalary').innerText = '₹ ' + gross;
    document.getElementById('deduct').innerText = '₹ ' + deduction;
    document.getElementById('nsalary').innerText = '₹ ' + net;

    emname.value = '';
    month.value = '';
    basicsalary.value = '';
    da.value = '';
    hra.value = '';
    ma.value = '';
    pf.value = '';
    esi.value = '';
    pt.value = '';

    document.getElementById("result").classList.remove("d-none");
};