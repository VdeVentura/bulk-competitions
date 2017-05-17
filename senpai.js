const senpai = [ { competition_id: 3,
    status_id: 1,
    description_en: 'In process',
    description_es: 'En proceso',
    count: 3 }
  ,{ competition_id: 3,
    status_id: 2,
    description_en: 'Approved',
    description_es: 'Aprobado',
    count: 1 }
   ,{ competition_id: 3,
       status_id: 1,
       description_en: 'In process',
       description_es: 'En proceso',
       count: 3 }
  ,{ competition_id: 3,
    status_id: 2,
    description_en: 'Approved',
    description_es: 'Aprobado',
    count: 1 }
,{ competition_id: 3,
      status_id: 3,
      description_en: 'Rejected',
      description_es: 'Rechazado',
      count: 1 }

  ,{ competition_id: 3,
    status_id: 2,
    description_en: 'Approved',
    description_es: 'Aprobado',
    count: 1 }
  ,{ competition_id: 3,
    status_id: 3,
    description_en: 'Rejected',
    description_es: 'Rechazado',
    count: 1 }
  ,{ competition_id: 3,
    status_id: 7,
    description_en: 'Paid',
    description_es: 'Pagado',
    count: 1 } ]

function youAreNotPrepared(senpai) {

	const done = {};
	const result = [];

	senpai.map((competition) => {
		const competitionId = competition.competition_id;
		const statusId = competition.status_id;

		if (!done[competitionId]) {

			const indexInArray = result.push(competition);
			done[competitionId] = {}
			done[competitionId][statusId] = indexInArray;

		}
		else {

			if (!done[competitionId][statusId]) {

				const indexInArray = result.push(competition);

				done[competitionId][statusId] = indexInArray;

			}
			else {
				const indexInArray = done[competitionId][statusId];
				result[indexInArray-1].count += competition.count;
			}
		}

	});

	return result;
}

var t0 = performance.now();

console.log('result',youAreNotPrepared(senpai));

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
