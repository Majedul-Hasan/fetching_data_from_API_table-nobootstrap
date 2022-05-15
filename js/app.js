

async function getData() {
    const API = 'https://ktrax.kisstech.ch/backend/logbook?query_type=ap&id=LSPM&tz=2&dbeg=2022-01-01'
    //let url = 'users.json';
    try {
        let res = await fetch(API);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderData() {
    let data = await getData();
    //console.log(data);
    const {max_takeoffs, max_dalt, last_ldg, first_tkof, expiry_date, end_date, count, begin_date, query_type, query_canonicalized, num_takeoffs, max_takeoffs_reached, time_zone, t_end, t_begin, sum_dt, sum_dalt, subscription_category, subscribed, sorties} = data
    
    
    let html = '';
    sorties.forEach((sortie, i) => {
        console.log(sortie, i);
        
        let htmlSegment = `<tr>
        <td>${i+1}</td>
        <td><a >${sortie?.cs}</a></td>
        
        <td>${sortie?.actype}</td> 
        <td>${sortie?.tkof?.time}</td>
        <td>${sortie?.tkof?.rwy}</td>
        <td>${sortie?.ldg?.time}</td>
        <td>${sortie?.ldg?.rwy}</td>
        <td>${sortie?.dt}</td>
        <td>${sortie?.seqnr}m</td>
        <td> <a>${sortie?.p1?.name}<a/><br/><a>${sortie?.p2?.name}<a/> </td>
        <td> <a>${sortie?.tkof?.loc}<a/> </td>
        </tr>
        `
       
        
        
        
        
        html += htmlSegment;
    });
    
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderData();