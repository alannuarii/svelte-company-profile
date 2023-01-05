export const load = ({ fetch, params }) => {
	const fetchData = async (unit) => {
		const res = await fetch(`https://apipltdktm.daengveloper.com/${unit}`);
		const result = await res.json();
		return result;
	};

	return {
		data: fetchData(params.unit)
	};
};
