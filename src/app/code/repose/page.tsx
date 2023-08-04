import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos() {
	const response = await fetch('https://api.github.com/users/navidsotoudeh/repos', {
		next: {
			revalidate: 60,
		},
	});

	await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

	const repos = await response.json();
	return repos;
}

const ReposPage = async () => {
	const repos = await fetchRepos();

	return (
		<div className="flex w-full flex-col">
			<h2>Repositories</h2>
			<ul className="flex w-[500px] flex-col gap-4 bg-orange-100">
				{repos.map((repo: any) => (
					<li key={repo.id} className="my-4 flex gap-4 p-2">
						<Link href={`/code/repos/${repo.name}`}>
							<h3>{repo.name}</h3>
							<p>{repo.description}</p>
							<div className="flex gap-4">
								<span>
									<FaStar /> {repo.stargazers_count}
								</span>
								<span>
									<FaCodeBranch /> {repo.forks_count}
								</span>
								<span>
									<FaEye /> {repo.watchers_count}
								</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
export default ReposPage;
