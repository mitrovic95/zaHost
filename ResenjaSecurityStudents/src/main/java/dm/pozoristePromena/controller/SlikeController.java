package dm.pozoristePromena.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dm.pozoristePromena.dto.SlikeDTO;
import dm.pozoristePromena.model.Slike;
import dm.pozoristePromena.service.SlikeService;

@RestController
@RequestMapping("/api/slike")
public class SlikeController {
	
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	private SlikeService slikeService;

//    @PreAuthorize("isAuthenticated()")
	@GetMapping
	public ResponseEntity<List<SlikeDTO>> getSlikePage() {
		final List<SlikeDTO> retVal = slikeService.findAll().stream().map(SlikeDTO::new)
				.collect(Collectors.toList());

		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}

//	@PreAuthorize("isAuthenticated()")
	@GetMapping("/{id}")
	public ResponseEntity<SlikeDTO> getSlike(@PathVariable Long id) {
		final Slike slike = slikeService.findOne(id);

		if (slike == null) {
			return new ResponseEntity<SlikeDTO>(HttpStatus.NOT_FOUND);
		}

		final SlikeDTO slikeDTO = new SlikeDTO(slike);
		return new ResponseEntity<>(slikeDTO, HttpStatus.OK);
	}

	@PreAuthorize("hasAnyAuthority('ADMIN')")
	@PostMapping
	public ResponseEntity<String> createNewSlike(@RequestBody Slike slike) {
		final Optional<Slike> checkSlike = slikeService.findById(slike.getId());
		if (checkSlike.isPresent()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else if (slike.getId() == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		slikeService.save(slike);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PreAuthorize("hasAnyAuthority('ADMIN')")
	@PutMapping("/{id}")
	public ResponseEntity<String> updateSlike(@PathVariable Long id, @RequestBody Slike slike) {
		final Slike foundSlike = slikeService.findOne(id);
		if (foundSlike == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		foundSlike.setNamena(slike.getNamena());
		foundSlike.setDatum(slike.getDatum());
		foundSlike.setSadrzaj(slike.getSadrzaj());
		slikeService.save(foundSlike);
		return new ResponseEntity<>(HttpStatus.OK);

	}

	@PreAuthorize("hasAnyAuthority('ADMIN')")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteSlike(@PathVariable Long id) {
		final Slike foundSlike = slikeService.findOne(id);
		if (foundSlike == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		slikeService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
