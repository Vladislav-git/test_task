SET STATISTICS TIME ON;  
with subdivisionsL as
(
	select s.id, s.parent_id, s.name, 1 as 'sub_level' from dbo.subdivisions s
	where s.parent_id is null
	union all
	select s.id, s.parent_id, s.name, sl.sub_level + 1 from dbo.subdivisions s
	JOIN subdivisionsL sl on s.parent_id = sl.id
)

select c.id as id, c.name as name, sl.name as sub_name, sl.id as sub_id, sl.sub_level from subdivisionsL sl
join dbo.collaborators c on c.subdivision_id = sl.id
where c.age < 40 and len(c.name) > 11 and sl.id <> 100055 and sl.id <> 100059

select s.name, count(*) as colls_count  from dbo.collaborators c
join dbo.subdivisions s on s.id = c.subdivision_id
group by s.name, c.subdivision_id
SET STATISTICS TIME OFF;  